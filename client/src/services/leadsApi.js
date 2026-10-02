import { apiClient } from './api';

export async function submitLead(leadData) {
  return apiClient('/leads', { body: leadData });
}