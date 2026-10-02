import { Router } from 'express';
import leadsRoutes from './leads.routes.js';
import contactRoutes from './contact.routes.js';
import availabilityRoutes from './availability.routes.js';
import bookingsRoutes from './bookings.routes.js';

const router = Router();

router.use('/leads', leadsRoutes);
router.use('/contact', contactRoutes);
router.use('/availability', availabilityRoutes);
router.use('/bookings', bookingsRoutes);

export default router;