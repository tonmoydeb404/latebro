"use client";

import { useRouter, useSearchParams } from "next/navigation";

type QueryParams = Record<string, string | undefined>;

export const useQueryRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (params: QueryParams, method: "push" | "replace") => {
    // Convert current search params to an object
    const currentParams = Object.fromEntries(searchParams.entries());

    // Merge with new params, updating existing ones
    const updatedParams = {
      ...currentParams,
      ...params,
    };

    // Remove undefined keys
    const filteredParams = Object.keys(updatedParams).reduce((acc, key) => {
      if (updatedParams[key] !== undefined) {
        acc[key] = updatedParams[key]!;
      }
      return acc;
    }, {} as Record<string, string>);

    // Convert back to a query string
    const queryString = new URLSearchParams(filteredParams).toString();
    const url = `?${queryString}`;

    // Call the appropriate router method
    router[method](url);
  };

  return {
    push: (params: QueryParams) => updateQuery(params, "push"),
    replace: (params: QueryParams) => updateQuery(params, "replace"),
  };
};
