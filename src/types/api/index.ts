export type ApiResponse<T> = {
  status: "success" | "error";
  message: string;
  results: T;
};
