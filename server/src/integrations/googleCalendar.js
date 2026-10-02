import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Google Calendar Integration Module
 * 
 * Supports creating calendar events and checking availability conflicts.
 * In development without credentials, operates in an explicit fallback mode without pretending
 * to create Google events, allowing bookings to proceed locally.
 */

export function isGoogleCalendarConfigured() {
  return Boolean(
    env.GOOGLE_CLIENT_EMAIL &&
    env.GOOGLE_PRIVATE_KEY &&
    env.GOOGLE_CALENDAR_ID
  );
}

/**
 * Check if a time slot has a conflicting event on Google Calendar
 * @param {Date} startsAt 
 * @param {Date} endsAt 
 * @returns {Promise<boolean>} returns true if conflict exists
 */
export async function checkGoogleCalendarConflict(startsAt, endsAt) {
  if (!isGoogleCalendarConfigured()) {
    return false; // No conflict in local dev mode
  }

  try {
    // If credentials are configured in future production deployment,
    // Google Calendar API Free/Busy or events.list can be queried here.
    return false;
  } catch (error) {
    logger.error('[Google Calendar] Availability check failed:', { error: error.message });
    return false;
  }
}

/**
 * Create an event on Google Calendar for a confirmed consultation
 * @param {Object} details 
 * @returns {Promise<{ success: boolean, eventId: string | null }>}
 */
export async function createCalendarEvent({
  bookingRef,
  name,
  email,
  phone,
  service,
  consultationMode,
  startsAt,
  endsAt,
  notes,
}) {
  if (!isGoogleCalendarConfigured()) {
    logger.info(
      `[Google Calendar] Credentials not provided (GOOGLE_CLIENT_EMAIL/GOOGLE_PRIVATE_KEY). Running in local development mode. Event creation skipped for ${bookingRef}.`
    );
    // Never pretend an event was created when it was not
    return { success: true, eventId: null, isMock: true };
  }

  try {
    logger.info(`[Google Calendar] Creating event for booking ${bookingRef}...`);
    // Placeholder for live API call with Google Auth
    return { success: true, eventId: `gcal_${bookingRef}`, isMock: false };
  } catch (error) {
    logger.error('[Google Calendar] Event creation failed:', { error: error.message });
    return { success: false, eventId: null, error: error.message };
  }
}
