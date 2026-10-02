import { getAvailableSlots } from '../services/availability.service.js';

export async function getAvailability(req, res, next) {
  try {
    const { date } = req.query;
    const result = await getAvailableSlots(date);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}