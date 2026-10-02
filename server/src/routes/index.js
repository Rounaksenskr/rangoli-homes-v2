import { Router } from 'express';
import leadsRoutes from './leads.routes.js';
import contactRoutes from './contact.routes.js';

const router = Router();

router.use('/leads', leadsRoutes);
router.use('/contact', contactRoutes);

export default router;