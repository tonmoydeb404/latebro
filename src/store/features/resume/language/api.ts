import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  LanguageCreatePayload,
  LanguageCreateResponse,
  LanguageDeletePayload,
  LanguageDeleteResponse,
  LanguageListResponse,
  LanguageUpdatePayload,
  LanguageUpdateResponse,
} from "@/types/api/resume/language";
import { createApi } from "@reduxjs/toolkit/query/react";

const resumeLanguageApi = createApi({
  reducerPath: "resumeLanguageApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Language"], // Define tag type
  endpoints: (builder) => ({
    listLanguage: builder.query<LanguageListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/languages`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Language", id: resumeId },
      ],
    }),
    createLanguage: builder.mutation<
      LanguageCreateResponse,
      LanguageCreatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/languages`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const newLanguage = data.results;

          // Manually update the cache for listLanguage
          dispatch(
            resumeLanguageApi.util.updateQueryData(
              "listLanguage",
              args.resume,
              (draft) => {
                draft.results.push(newLanguage);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update language cache:", error);
        }
      },
    }),
    updateLanguage: builder.mutation<
      LanguageUpdateResponse,
      LanguageUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/languages/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updatedLanguage = data.results;

          // Update the cache for listLanguage
          dispatch(
            resumeLanguageApi.util.updateQueryData(
              "listLanguage",
              args.resume,
              (draft) => {
                const index = draft.results.findIndex(
                  (item) => item._id === updatedLanguage._id
                );
                if (index !== -1) {
                  draft.results[index] = updatedLanguage;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update language cache:", error);
        }
      },
    }),
    deleteLanguage: builder.mutation<
      LanguageDeleteResponse,
      LanguageDeletePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/languages/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the language from the cache for listLanguage
          dispatch(
            resumeLanguageApi.util.updateQueryData(
              "listLanguage",
              args.resume,
              (draft) => {
                draft.results = draft.results.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update language cache:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateLanguageMutation,
  useLazyListLanguageQuery,
  useListLanguageQuery,
  useDeleteLanguageMutation,
  useUpdateLanguageMutation,
} = resumeLanguageApi;
export default resumeLanguageApi;
