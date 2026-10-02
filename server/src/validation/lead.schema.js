import { z } from 'zod';

export const createLeadSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(80),
    phone: z
      .string()
      .trim()
      .regex(/^(?:\+91)?[6-9]\d{9}$/, 'Must be a valid 10-digit Indian mobile number'),
    email: z.string().trim().email('Invalid email address').max(100),
    service: z.string().trim().min(1, 'Service requirement is required').max(100),
    message: z.string().trim().max(1000).optional().nullable(),
    city: z.string().trim().max(100).optional().nullable(),
    propertyType: z.string().trim().max(100).optional().nullable(),
    budgetBand: z.string().trim().max(100).optional().nullable(),
    preferredContact: z.string().trim().max(50).optional().nullable(),
    source: z.string().trim().default('enquiry_modal'),
    hp_token: z.string().max(0, 'Spam rejected').optional().or(z.literal('')),
  }),
});