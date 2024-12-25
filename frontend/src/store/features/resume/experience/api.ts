import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  ExperienceCreatePayload,
  ExperienceCreateResponse,
  ExperienceDeletePayload,
  ExperienceDeleteResponse,
  ExperienceListResponse,
  ExperienceUpdatePayload,
  ExperienceUpdateResponse,
} from "@/types/api/resume/experience";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeExperienceApi = createApi({
  reducerPath: "resumeExperienceApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Experience"], // Define tag type
  endpoints: (builder) => ({
    listExperience: builder.query<ExperienceListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/experiences`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Experience", id: resumeId },
      ],
    }),
    createExperience: builder.mutation<
      ExperienceCreateResponse,
      ExperienceCreatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/experiences`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Manually update the cache for listExperience
          dispatch(
            resumeExperienceApi.util.updateQueryData(
              "listExperience",
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
                draft.results.experiences.push(updates);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update experience cache:", error);
        }
      },
    }),
    updateExperience: builder.mutation<
      ExperienceUpdateResponse,
      ExperienceUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/experiences/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Update the cache for listExperience
          dispatch(
            resumeExperienceApi.util.updateQueryData(
              "listExperience",
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
                const index = draft.results.experiences.findIndex(
                  (item) => item._id === updates._id
                );
                if (index !== -1) {
                  draft.results.experiences[index] = updates;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update experience cache:", error);
        }
      },
    }),
    deleteExperience: builder.mutation<
      ExperienceDeleteResponse,
      ExperienceDeletePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/experiences/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the experience from the cache for listExperience
          dispatch(
            resumeExperienceApi.util.updateQueryData(
              "listExperience",
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
                draft.results.experiences = draft.results.experiences.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update experience cache:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useLazyListExperienceQuery,
  useListExperienceQuery,
  useDeleteExperienceMutation,
  useUpdateExperienceMutation,
} = resumeExperienceApi;
export default resumeExperienceApi;
