import { Router } from 'express';
import { handleCreateBooking, getBookingByRef } from '../controllers/bookings.controller.js';
import { validate } from '../middleware/validate.js';
import { formSubmissionLimiter } from '../middleware/rateLimit.js';
import { createBookingSchema } from '../validation/booking.schema.js';

const router = Router();
router.post('/', formSubmissionLimiter, validate(createBookingSchema), handleCreateBooking);
router.get('/:bookingRef', getBookingByRef);
export default router;