import { Router } from 'express';
import { createLead } from '../controllers/leads.controller.js';
import { validate } from '../middleware/validate.js';
import { formSubmissionLimiter } from '../middleware/rateLimit.js';
import { createLeadSchema } from '../validation/lead.schema.js';

const router = Router();
router.post('/', formSubmissionLimiter, validate(createLeadSchema), createLead);
export default router;