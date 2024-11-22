export type ApiResponseStatus = 'success' | 'error';

export interface ApiPagination {
  pages: number;
  current: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  status: ApiResponseStatus;
  code: number;
  results: T;
  error: null;
}

export interface ApiErrorDetail {
  key: string;
  error: string;
}

export interface ApiErrorResponse {
  status: 'error';
  code: number;
  message: string;
  error: {
    type: string;
    details: ApiErrorDetail[];
  };
}
