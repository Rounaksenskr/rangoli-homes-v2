import { Router } from 'express';
import { submitContact } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.js';
import { formSubmissionLimiter } from '../middleware/rateLimit.js';
import { createContactSchema } from '../validation/contact.schema.js';

const router = Router();
router.post('/', formSubmissionLimiter, validate(createContactSchema), submitContact);
export default router;