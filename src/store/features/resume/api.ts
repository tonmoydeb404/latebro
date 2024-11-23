import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  ResumeCreatePayload,
  ResumeCreateResponse,
  ResumeDeletePayload,
  ResumeDeleteResponse,
  ResumeGetResponse,
  ResumeListResponse,
  ResumeUpdatePayload,
  ResumeUpdateResponse,
} from "@/types/api/resume";
import { createApi } from "@reduxjs/toolkit/query/react";

const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Resume"], // Define tag type
  endpoints: (builder) => ({
    listResume: builder.query<ResumeListResponse, void>({
      query: () => ({
        url: `/`,
      }),
      providesTags: (result, error) => [{ type: "Resume" }],
    }),
    getResume: builder.query<ResumeGetResponse, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Resume", id }],
    }),
    createResume: builder.mutation<ResumeCreateResponse, ResumeCreatePayload>({
      query: (payload) => ({
        url: `/`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const newResume = data.results;

          // Manually update the cache for listResume
          dispatch(
            resumeApi.util.updateQueryData("listResume", undefined, (draft) => {
              draft.results.push(newResume);
            })
          );
        } catch (error) {
          console.error("Failed to update resume cache:", error);
        }
      },
    }),
    updateResume: builder.mutation<ResumeUpdateResponse, ResumeUpdatePayload>({
      query: (payload) => ({
        url: `/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updatedResume = data.results;

          // Update the cache for listResume
          dispatch(
            resumeApi.util.updateQueryData("listResume", undefined, (draft) => {
              const index = draft.results.findIndex(
                (item) => item._id === updatedResume._id
              );
              if (index !== -1) {
                draft.results[index] = updatedResume;
              }
            })
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData("getResume", args._id, (draft) => {
              if (draft.results) {
                draft.results = { ...draft.results, ...updatedResume };
              }
            })
          );
        } catch (error) {
          console.error("Failed to update resume cache:", error);
        }
      },
    }),
    deleteResume: builder.mutation<ResumeDeleteResponse, ResumeDeletePayload>({
      query: (payload) => ({
        url: `/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the resume from the cache for listResume
          dispatch(
            resumeApi.util.updateQueryData("listResume", undefined, (draft) => {
              draft.results = draft.results.filter(
                (item) => item._id !== args._id
              );
            })
          );
        } catch (error) {
          console.error("Failed to update resume cache:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useLazyListResumeQuery,
  useListResumeQuery,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
} = resumeApi;
export default resumeApi;
