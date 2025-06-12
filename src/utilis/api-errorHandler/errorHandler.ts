import { AxiosError } from 'axios';

export function handleApiError(error: unknown): string {
  if (error && typeof error === 'object' && 'isAxiosError' in error && (error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // Server responded with status other than 2xx
      const data = axiosError.response.data;
      const message = (data && typeof data === 'object' && 'message' in data) ? (data as { message?: string }).message : undefined;
      return message || `Error: ${axiosError.response.status}`;
    } else if (axiosError.request) {
      // Request made but no response
      return 'Network error: No response from server';
    }
  }
  // Other errors
  return 'An unexpected error occurred';
}
