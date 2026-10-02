import { Router } from 'express';
import { handleSubscribeNewsletter } from '../controllers/newsletter.controller.js';
import { formSubmissionLimiter } from '../middleware/rateLimit.js';

const router = Router();

router.post('/subscribe', formSubmissionLimiter, handleSubscribeNewsletter);

export default router;
