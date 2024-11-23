export type ApiResponseStatus = "success" | "error";

export interface ApiPagination {
  pages: number;
  current: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  status: "success";
  code: number;
  results: T;
  error: null;
}

export interface ApiPaginationResponse<T> {
  status: "success";
  code: number;
  results: { items: T[]; pagination: ApiPagination };
  error: null;
}

// ----------------------------------------------------------------------

export interface ApiErrorDetail {
  key: string;
  error: string;
}

export interface ApiErrorResponse {
  status: "error";
  code: number;
  message: string;
  error: {
    type: string;
    details: ApiErrorDetail[];
  };
}
