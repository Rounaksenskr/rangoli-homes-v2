import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

let transporter = null;

// Initialize transport (uses ethereal test account fallback if SMTP credentials are empty)
async function getTransporter() {
  if (transporter) return transporter;

  if (env.SMTP_USER && env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  } else {
    // Ethereal mock transport for local sandbox testing
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
    logger.info('Using Ethereal mock mailer', { user: testAccount.user });
  }

  return transporter;
}

export async function sendEmail({ to, subject, html, replyTo }) {
  try {
    const mailer = await getTransporter();
    const info = await mailer.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html,
      replyTo: replyTo || undefined,
    });

    if (info.messageId && nodemailer.getTestMessageUrl(info)) {
      logger.info(`Preview mail URL: ${nodemailer.getTestMessageUrl(info)}`);
    }
    return { success: true };
  } catch (error) {
    logger.error('Email dispatch failed', { error: error.message });
    // Non-blocking: failures in notification emails do not reject user transactions
    return { success: false, error: error.message };
  }
}

export function buildAdminAlertTemplate({ title, data }) {
  const rows = Object.entries(data)
    .filter(([_, v]) => Boolean(v))
    .map(
      ([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;color:#4C4C4C;">${k}</td><td style="padding:6px 12px;">${v}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #DFDFDF;padding:24px;border-radius:8px;">
      <h2 style="color:#212529;margin-top:0;">${title}</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;
}

export function buildCustomerAckTemplate({ name, message }) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #DFDFDF;padding:24px;border-radius:8px;">
      <h2 style="color:#814882;margin-top:0;">RangoliHomes</h2>
      <p>Hello ${name},</p>
      <p>${message}</p>
      <p style="margin-top:24px;color:#4C4C4C;font-size:12px;">RangoliHomes Design Studio &bull; Bengaluru, India</p>
    </div>
  `;
}