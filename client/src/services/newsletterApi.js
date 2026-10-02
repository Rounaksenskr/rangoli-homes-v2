import { apiClient } from './api';

export async function subscribeNewsletter(email) {
  return apiClient('/newsletter/subscribe', {
    body: { email },
  });
}
