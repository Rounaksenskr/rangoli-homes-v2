import { Router } from 'express';
import { getAvailability } from '../controllers/availability.controller.js';
import { validate } from '../middleware/validate.js';
import { availabilityQuerySchema } from '../validation/booking.schema.js';

const router = Router();
router.get('/', validate(availabilityQuerySchema), getAvailability);
export default router;