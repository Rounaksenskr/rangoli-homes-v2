import { apiClient } from './api';

export async function submitContactMessage(contactData) {
  return apiClient('/contact', { body: contactData });
}