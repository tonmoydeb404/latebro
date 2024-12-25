import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  EducationCreatePayload,
  EducationCreateResponse,
  EducationDeletePayload,
  EducationDeleteResponse,
  EducationListResponse,
  EducationUpdatePayload,
  EducationUpdateResponse,
} from "@/types/api/resume/education";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeEducationApi = createApi({
  reducerPath: "resumeEducationApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Education"], // Define tag type
  endpoints: (builder) => ({
    listEducation: builder.query<EducationListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/educations`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Education", id: resumeId },
      ],
    }),
    createEducation: builder.mutation<
      EducationCreateResponse,
      EducationCreatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/educations`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Manually update the cache for listEducation
          dispatch(
            resumeEducationApi.util.updateQueryData(
              "listEducation",
              args.resume,
              (draft) => {
                draft.results.push(updates);
              }
            )
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData(
              "getResume",
              args.resume,
              (draft) => {
                draft.results.educations.push(updates);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update education cache:", error);
        }
      },
    }),
    updateEducation: builder.mutation<
      EducationUpdateResponse,
      EducationUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/educations/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Update the cache for listEducation
          dispatch(
            resumeEducationApi.util.updateQueryData(
              "listEducation",
              args.resume,
              (draft) => {
                const index = draft.results.findIndex(
                  (item) => item._id === updates._id
                );
                if (index !== -1) {
                  draft.results[index] = updates;
                }
              }
            )
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData(
              "getResume",
              args.resume,
              (draft) => {
                const index = draft.results.educations.findIndex(
                  (item) => item._id === updates._id
                );
                if (index !== -1) {
                  draft.results.educations[index] = updates;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update education cache:", error);
        }
      },
    }),
    deleteEducation: builder.mutation<
      EducationDeleteResponse,
      EducationDeletePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/educations/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the education from the cache for listEducation
          dispatch(
            resumeEducationApi.util.updateQueryData(
              "listEducation",
              args.resume,
              (draft) => {
                draft.results = draft.results.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData(
              "getResume",
              args.resume,
              (draft) => {
                draft.results.educations = draft.results.educations.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update education cache:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useLazyListEducationQuery,
  useListEducationQuery,
  useDeleteEducationMutation,
  useUpdateEducationMutation,
} = resumeEducationApi;
export default resumeEducationApi;
