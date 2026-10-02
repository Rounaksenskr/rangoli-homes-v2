export const businessConfig = {
  timezone: 'Asia/Kolkata',
  operatingHours: {
    startHour: 10, // 10:00 AM
    endHour: 18,   // 06:00 PM
  },
  slotDurationMinutes: 60,
  minBookingNoticeHours: 24,
  maxAdvanceDays: 30,
  workingDays: [1, 2, 3, 4, 5, 6], // Monday to Saturday (0 = Sunday)
  holidays: [
    '2026-01-26', // Republic Day
    '2026-08-15', // Independence Day
    '2026-10-02', // Gandhi Jayanti
  ],
};