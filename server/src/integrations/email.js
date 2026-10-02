import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

let transporter = null;

// Initialize transport (uses ethereal test account fallback in development if SMTP credentials are empty)
async function getTransporter() {
  if (transporter) return transporter;

  if (env.SMTP_USER && env.SMTP_PASS) {
    logger.info('[Email] Using configured SMTP transport', { host: env.SMTP_HOST, port: env.SMTP_PORT });
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  } else if (env.NODE_ENV === 'production') {
    logger.warn('[Email] SMTP credentials not configured in production mode. Outbound emails will be skipped.');
    return null;
  } else {
    // Ethereal mock transport for local development sandbox testing
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      logger.info('[Email] Using Ethereal mock mailer for local development', { user: testAccount.user });
    } catch (err) {
      logger.warn('[Email] Failed to initialize Ethereal sandbox, using console fallback', { error: err.message });
      transporter = {
        sendMail: async (mailOpts) => {
          logger.info('[Email Mock Console Dispatch]', { to: mailOpts.to, subject: mailOpts.subject });
          return { messageId: `mock_${Date.now()}` };
        }
      };
    }
  }

  return transporter;
}

export async function sendEmail({ to, subject, html, replyTo }) {
  try {
    const mailer = await getTransporter();
    if (!mailer) {
      logger.warn(`[Email] Skipping email dispatch to ${to} (mailer not configured)`);
      return { success: false, error: 'Mailer not configured' };
    }

    const info = await mailer.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html,
      replyTo: replyTo || undefined,
    });

    if (info?.messageId && nodemailer.getTestMessageUrl?.(info)) {
      logger.info(`[Email Preview URL]: ${nodemailer.getTestMessageUrl(info)}`);
    } else {
      logger.info(`[Email Sent] To: ${to} | Subject: "${subject}"`);
    }
    return { success: true };
  } catch (error) {
    logger.error('Email dispatch failed', { error: error.message });
    // Non-blocking: failures in notification emails do not reject user transactions
    return { success: false, error: error.message };
  }
}

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildAdminAlertTemplate({ title, data }) {
  const rows = Object.entries(data)
    .filter(([_, v]) => Boolean(v))
    .map(
      ([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;color:#4C4C4C;">${escapeHtml(k)}</td><td style="padding:6px 12px;">${escapeHtml(String(v))}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #DFDFDF;padding:24px;border-radius:8px;">
      <h2 style="color:#212529;margin-top:0;">${escapeHtml(title)}</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;
}

export function buildCustomerAckTemplate({ name, message }) {
  // message might contain intentional HTML from our own code (e.g., <br/>, <strong>)
  // so we only escape the name. The message is assembled by the server, not directly from user input.
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #DFDFDF;padding:24px;border-radius:8px;">
      <h2 style="color:#814882;margin-top:0;">RangoliHomes</h2>
      <p>Hello ${escapeHtml(name)},</p>
      <p>${message}</p>
      <p style="margin-top:24px;color:#4C4C4C;font-size:12px;">RangoliHomes Design Studio &bull; Bengaluru, India</p>
    </div>
  `;
}