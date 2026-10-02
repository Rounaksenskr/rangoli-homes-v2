import { prisma } from '../db/prisma.js';
import { sendEmail, buildAdminAlertTemplate, buildCustomerAckTemplate } from '../integrations/email.js';
import { env } from '../config/env.js';
import { formatToIST } from '../utils/time.js';
import { getAvailableSlots } from './availability.service.js';

function generateBookingRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'RH-';
  for (let i = 0; i < 6; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

import { createCalendarEvent } from '../integrations/googleCalendar.js';

export async function createBooking({
  name,
  phone,
  email,
  service,
  date,
  startTime,
  notes,
  consultationMode = 'Studio Consultation',
  dimensionsFile = null,
}) {
  const slotKey = `${date}_${startTime}`;

  // Calculate start and end UTC timestamps
  const startsAt = new Date(`${date}T${startTime}:00+05:30`);
  const endsAt = new Date(startsAt.getTime() + 60 * 60 * 1000); // 1-hour consultation

  let bookingRef = generateBookingRef();

  // Execute atomic creation with Lead and Consultation records
  const result = await prisma.$transaction(async (tx) => {
    // 1. Verify availability rules
    const availability = await getAvailableSlots(date);
    if (!availability.available || !availability.slots.includes(startTime)) {
      const error = new Error(`Slot not available: ${availability.reason || 'Invalid time'}`);
      error.statusCode = 400;
      throw error;
    }

    // 2. Verify slot is still free in DB
    const existing = await tx.consultation.findUnique({
      where: { slotKey },
    });

    if (existing) {
      if (existing.status !== 'CANCELLED') {
        const error = new Error('This appointment slot was just booked by another client. Please select another time.');
        error.statusCode = 409;
        error.code = 'SLOT_TAKEN';
        throw error;
      } else {
        // Free up the slotKey from the cancelled booking so we can use it
        await tx.consultation.update({ where: { id: existing.id }, data: { slotKey: null } });
      }
    }

    // 3. Link or create Lead record
    const lead = await tx.lead.findFirst({ where: { email } });
    let finalLead;
    if (lead) {
      finalLead = await tx.lead.update({
        where: { id: lead.id },
        data: { name, phone, service, message: notes || lead.message }
      });
    } else {
      finalLead = await tx.lead.create({
        data: { name, phone, email, service, message: notes, source: 'booking' },
      });
    }

    // 4. Create unique Consultation
    let consultation = null;
    let attempts = 0;
    while (!consultation && attempts < 5) {
      try {
        consultation = await tx.consultation.create({
          data: {
            bookingRef,
            leadId: finalLead.id,
            service,
            consultationMode,
            dimensionsFile: dimensionsFile || null,
            startsAt,
            endsAt,
            slotKey,
            status: 'CONFIRMED',
            notes,
          },
        });
      } catch (err) {
        if (err.code === 'P2002' && err.meta?.target?.includes('bookingRef')) {
          bookingRef = generateBookingRef();
          attempts++;
        } else if (err.code === 'P2002' && err.meta?.target?.includes('slotKey')) {
          const error = new Error('This appointment slot was just booked by another client. Please select another time.');
          error.statusCode = 409;
          error.code = 'SLOT_TAKEN';
          throw error;
        } else {
          throw err;
        }
      }
    }

    if (!consultation) {
      throw new Error('Failed to generate a unique booking reference after multiple attempts.');
    }

    return { lead: finalLead, consultation };
  });

  const formattedTime = formatToIST(startsAt);

  // Google Calendar Integration (Non-blocking / dev fallback)
  createCalendarEvent({
    bookingRef,
    name,
    email,
    phone,
    service,
    consultationMode,
    startsAt,
    endsAt,
    notes,
  }).then(async (calRes) => {
    if (calRes?.eventId) {
      try {
        await prisma.consultation.update({
          where: { id: result.consultation.id },
          data: { googleEventId: calRes.eventId },
        });
      } catch (e) {
        // Non-blocking update failure
      }
    }
  }).catch(() => {});

  // Dispatch Admin Notification (Non-blocking)
  sendEmail({
    to: env.ADMIN_EMAIL,
    subject: `New Booking Confirmed: ${bookingRef} - ${name}`,
    replyTo: email,
    html: buildAdminAlertTemplate({
      title: 'Consultation Confirmed',
      data: {
        'Booking Ref': bookingRef,
        Client: name,
        Phone: phone,
        Email: email,
        Service: service,
        'Consultation Mode': consultationMode,
        'Floor Plan / Dimensions': dimensionsFile || 'None uploaded',
        'Scheduled Time (IST)': formattedTime,
        Notes: notes || 'None',
      },
    }),
  });

  // Dispatch Client Confirmation (Non-blocking)
  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m]);
  const modeInstructions = consultationMode === 'Virtual Consultation'
    ? 'A Google Meet link will be emailed to you prior to the session.'
    : 'We look forward to hosting you at our studio on Design Avenue.';

  sendEmail({
    to: email,
    subject: `Consultation Confirmed [${bookingRef}] — RangoliHomes`,
    html: buildCustomerAckTemplate({
      name,
      message: `Your interior design consultation has been confirmed for <strong>${formattedTime}</strong>.<br/><br/><strong>Booking Reference:</strong> ${bookingRef}<br/><strong>Service:</strong> ${escapeHtml(service)}<br/><strong>Mode:</strong> ${escapeHtml(consultationMode)}<br/><br/>${modeInstructions}<br/><br/>Our design director will contact you at your appointed time.`,
    }),
  });

  return {
    bookingRef,
    startsAt,
    service,
    consultationMode,
    dimensionsFile,
    clientName: name,
  };
}