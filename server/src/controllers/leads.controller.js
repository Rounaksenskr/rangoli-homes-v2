import { prisma } from '../db/prisma.js';
import { sendEmail, buildAdminAlertTemplate, buildCustomerAckTemplate } from '../integrations/email.js';
import { env } from '../config/env.js';
import { formatToIST } from '../utils/time.js';

export async function createLead(req, res, next) {
  try {
    const { name, phone, email, service, message, city, propertyType, budgetBand, preferredContact, source } = req.body;

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        service,
        message,
        city,
        propertyType,
        budgetBand,
        preferredContact,
        source: source || 'enquiry_modal',
      },
    });

    // Notify Admin (Non-blocking)
    sendEmail({
      to: env.ADMIN_EMAIL,
      subject: `New Lead: ${service} - ${name}`,
      replyTo: email,
      html: buildAdminAlertTemplate({
        title: 'New Consultation Enquiry',
        data: {
          Name: name,
          Phone: phone,
          Email: email,
          Service: service,
          City: city || 'Not specified',
          Property: propertyType || 'Not specified',
          Budget: budgetBand || 'Not specified',
          Message: message || 'N/A',
          Timestamp: formatToIST(lead.createdAt),
        },
      }),
    });

    // Acknowledge Customer (Non-blocking)
    sendEmail({
      to: email,
      subject: 'We have received your enquiry — RangoliHomes',
      html: buildCustomerAckTemplate({
        name,
        message: 'Thank you for reaching out. A senior interior designer has received your specifications and will get in touch shortly.',
      }),
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: { id: lead.id },
    });
  } catch (error) {
    next(error);
  }
}