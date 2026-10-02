import { createBooking } from '../services/booking.service.js';
import { prisma } from '../db/prisma.js';

export async function handleCreateBooking(req, res, next) {
  try {
    const booking = await createBooking(req.body);
    res.status(201).json({
      success: true,
      message: 'Consultation successfully scheduled',
      data: booking,
    });
  } catch (error) {
    next(error);
  }
}

export async function getBookingByRef(req, res, next) {
  try {
    const { bookingRef } = req.params;
    const booking = await prisma.consultation.findUnique({
      where: { bookingRef },
      include: {
        lead: {
          select: { name: true, email: true, phone: true },
        },
      },
    });

    if (!booking) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Booking reference not found' },
      });
    }

    res.status(200).json({
      success: true,
      data: {
        bookingRef: booking.bookingRef,
        service: booking.service,
        consultationMode: booking.consultationMode,
        dimensionsFile: booking.dimensionsFile,
        startsAt: booking.startsAt,
        status: booking.status,
        name: booking.lead.name,
      },
    });
  } catch (error) {
    next(error);
  }
}