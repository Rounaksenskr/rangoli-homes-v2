import { prisma } from '../db/prisma.js';
import { sendEmail, buildAdminAlertTemplate, buildCustomerAckTemplate } from '../integrations/email.js';
import { env } from '../config/env.js';
import { formatToIST } from '../utils/time.js';

function generateBookingRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'RH-';
  for (let i = 0; i < 6; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export async function createBooking({ name, phone, email, service, date, startTime, notes }) {
  const slotKey = `${date}_${startTime}`;

  // Calculate start and end UTC timestamps
  const startsAt = new Date(`${date}T${startTime}:00+05:30`);
  const endsAt = new Date(startsAt.getTime() + 60 * 60 * 1000); // 1-hour consultation

  let bookingRef = generateBookingRef();

  // Execute atomic creation with Lead and Consultation records
  const result = await prisma.$transaction(async (tx) => {
    // 1. Verify slot is still free
    const existing = await tx.consultation.findUnique({
      where: { slotKey },
    });

    if (existing && existing.status !== 'CANCELLED') {
      const error = new Error('This appointment slot was just booked by another client. Please select another time.');
      error.statusCode = 409;
      error.code = 'SLOT_TAKEN';
      throw error;
    }

    // 2. Link or create Lead record
    const lead = await tx.lead.create({
      data: {
        name,
        phone,
        email,
        service,
        message: notes,
        source: 'booking',
      },
    });

    // 3. Create unique Consultation
    const consultation = await tx.consultation.create({
      data: {
        bookingRef,
        leadId: lead.id,
        service,
        startsAt,
        endsAt,
        slotKey,
        status: 'CONFIRMED',
        notes,
      },
    });

    return { lead, consultation };
  });

  const formattedTime = formatToIST(startsAt);

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
        'Scheduled Time (IST)': formattedTime,
        Notes: notes || 'None',
      },
    }),
  });

  // Dispatch Client Confirmation (Non-blocking)
  sendEmail({
    to: email,
    subject: `Consultation Confirmed [${bookingRef}] — RangoliHomes`,
    html: buildCustomerAckTemplate({
      name,
      message: `Your interior design consultation has been confirmed for <strong>${formattedTime}</strong>.<br/><br/><strong>Booking Reference:</strong> ${bookingRef}<br/><strong>Service:</strong> ${service}<br/><br/>Our design director will contact you at your appointed time.`,
    }),
  });

  return {
    bookingRef,
    startsAt,
    service,
    clientName: name,
  };
}