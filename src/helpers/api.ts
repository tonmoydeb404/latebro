import { ApiErrorResponse } from "@/types/api";

export const isApiError = (obj: any): obj is ApiErrorResponse => {
  return (
    obj &&
    obj.status === "error" &&
    typeof obj.code === "number" &&
    typeof obj.message === "string" &&
    obj.error &&
    typeof obj.error.type === "string" &&
    Array.isArray(obj.error.details) &&
    (obj.error.details.length === 0 ||
      obj.error.details.every(
        (detail: any) =>
          detail &&
          typeof detail.key === "string" &&
          typeof detail.error === "string"
      ))
  );
};

export const hasApiError = (obj: any): obj is { data: ApiErrorResponse } => {
  return (
    typeof obj === "object" &&
    "data" in obj &&
    obj["data"] &&
    isApiError(obj["data"])
  );
};
