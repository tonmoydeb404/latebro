export type ApiResponseStatus = 'success' | 'error';

export interface ApiResponse<T> {
  status: ApiResponseStatus;
  message: string;
  results: T;
}
