import { prisma } from '../db/prisma.js';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().trim().email('Please provide a valid email address').max(100),
});

export async function handleSubscribeNewsletter(req, res, next) {
  try {
    const parseResult = newsletterSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: parseResult.error.errors[0]?.message || 'Invalid email address',
        },
      });
    }

    const email = parseResult.data.email.toLowerCase();

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to our design journal!',
        data: { email: existing.email },
      });
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: {
        email,
        status: 'SUBSCRIBED',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to our design newsletter!',
      data: { id: subscriber.id, email: subscriber.email },
    });
  } catch (error) {
    next(error);
  }
}
