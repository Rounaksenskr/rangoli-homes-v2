import { prisma } from '../db/prisma.js';
import { sendEmail, buildAdminAlertTemplate, buildCustomerAckTemplate } from '../integrations/email.js';
import { env } from '../config/env.js';
import { formatToIST } from '../utils/time.js';

export async function submitContact(req, res, next) {
  try {
    const { name, phone, email, service, message } = req.body;

    const record = await prisma.contactMessage.create({
      data: { name, phone, email, service, message },
    });

    // Notify Admin
    sendEmail({
      to: env.ADMIN_EMAIL,
      subject: `New Contact Message: ${name}`,
      replyTo: email,
      html: buildAdminAlertTemplate({
        title: 'New Direct Contact Message',
        data: {
          Name: name,
          Phone: phone,
          Email: email,
          Service: service || 'General',
          Message: message,
          Timestamp: formatToIST(record.createdAt),
        },
      }),
    });

    // Acknowledge Customer
    sendEmail({
      to: email,
      subject: 'Message Received — RangoliHomes',
      html: buildCustomerAckTemplate({
        name,
        message: 'We have received your message and will review your note shortly.',
      }),
    });

    res.status(201).json({
      success: true,
      message: 'Message delivered successfully',
      data: { id: record.id },
    });
  } catch (error) {
    next(error);
  }
}