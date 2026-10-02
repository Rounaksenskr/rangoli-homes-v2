import { z } from 'zod';

export const availabilityQuerySchema = z.object({
  query: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
  }),
});

export const createBookingSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(80),
    phone: z
      .string()
      .trim()
      .regex(/^(?:\+91)?[6-9]\d{9}$/, 'Must be a valid 10-digit Indian mobile number'),
    email: z.string().trim().email('Invalid email address').max(100),
    service: z.string().trim().min(1, 'Service is required').max(100),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
    startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Time must be in HH:mm 24-hour format'),
    consultationMode: z.enum(['Studio Consultation', 'Virtual Consultation']).default('Studio Consultation'),
    dimensionsFile: z.string().trim().max(255).optional().nullable(),
    notes: z.string().trim().max(1000).optional().nullable(),
  }),
});