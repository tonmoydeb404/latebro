export type ApiResponseStatus = 'success' | 'error';

export interface ApiPagination {
  pages: number;
  current: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  status: ApiResponseStatus;
  message: string;
  results: T;
}
