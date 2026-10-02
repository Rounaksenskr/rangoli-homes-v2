import { prisma } from '../db/prisma.js';
import { businessConfig } from '../config/business.js';

export async function getAvailableSlots(dateString) {
  const targetDate = new Date(`${dateString}T00:00:00+05:30`);
  const dayOfWeek = targetDate.getDay();

  // Validate working day (Mon-Sat) and holiday list
  if (!businessConfig.workingDays.includes(dayOfWeek)) {
    return { available: false, reason: 'Closed on Sundays', slots: [] };
  }

  if (businessConfig.holidays.includes(dateString)) {
    return { available: false, reason: 'Holiday', slots: [] };
  }

  // Enforce booking window limits
  const now = new Date();
  const diffHours = (targetDate.getTime() - now.getTime()) / (1000 * 60 * 60);

  if (diffHours < -24) {
    return { available: false, reason: 'Cannot query past dates', slots: [] };
  }

  const maxAdvanceMs = businessConfig.maxAdvanceDays * 24 * 60 * 60 * 1000;
  if (targetDate.getTime() - now.getTime() > maxAdvanceMs) {
    return { available: false, reason: 'Bookings only open up to 30 days in advance', slots: [] };
  }

  // Generate standard working hour slots
  const allSlots = [];
  const { startHour, endHour } = businessConfig.operatingHours;

  for (let hour = startHour; hour < endHour; hour++) {
    const formattedHour = String(hour).padStart(2, '0');
    allSlots.push(`${formattedHour}:00`);
  }

  // Query database for confirmed bookings on this date
  const dayStart = new Date(`${dateString}T00:00:00.000Z`);
  const dayEnd = new Date(`${dateString}T23:59:59.999Z`);

  const bookedConsultations = await prisma.consultation.findMany({
    where: {
      startsAt: {
        gte: dayStart,
        lte: dayEnd,
      },
      status: {
        not: 'CANCELLED',
      },
    },
    select: {
      slotKey: true,
    },
  });

  const bookedSlotKeys = new Set(bookedConsultations.map((c) => c.slotKey));

  // Filter slots against database bookings and 24-hour advance notice
  const availableSlots = allSlots.filter((slotTime) => {
    const slotKey = `${dateString}_${slotTime}`;
    if (bookedSlotKeys.has(slotKey)) return false;

    // Check minimum 24-hour advance notice
    const slotDateTime = new Date(`${dateString}T${slotTime}:00+05:30`);
    const hoursFromNow = (slotDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);
    return hoursFromNow >= businessConfig.minBookingNoticeHours;
  });

  return {
    available: true,
    date: dateString,
    slots: availableSlots,
  };
}