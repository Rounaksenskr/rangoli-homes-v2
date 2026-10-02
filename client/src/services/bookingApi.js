import { apiClient } from './api';

export async function fetchAvailability(dateString) {
  return apiClient(`/availability?date=${dateString}`);
}

export async function submitBooking(bookingData) {
  return apiClient('/bookings', { body: bookingData });
}

export async function fetchBookingDetails(bookingRef) {
  return apiClient(`/bookings/${bookingRef}`);
}