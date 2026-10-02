export const logger = {
  info: (msg, meta = {}) => {
    const sanitized = { ...meta };
    if (sanitized.phone) sanitized.phone = '[REDACTED_PHONE]';
    if (sanitized.email) sanitized.email = '[REDACTED_EMAIL]';
    console.log(`[INFO] ${new Date().toISOString()} - ${msg}`, Object.keys(sanitized).length ? sanitized : '');
  },
  error: (msg, meta = {}) => {
    const sanitized = { ...meta };
    if (sanitized.phone) sanitized.phone = '[REDACTED_PHONE]';
    if (sanitized.email) sanitized.email = '[REDACTED_EMAIL]';
    console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, Object.keys(sanitized).length ? sanitized : '');
  },
  warn: (msg, meta = {}) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`, meta);
  }
};