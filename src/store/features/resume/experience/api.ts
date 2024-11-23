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
          const newExperience = data.results;

          // Manually update the cache for listExperience
          dispatch(
            resumeExperienceApi.util.updateQueryData(
              "listExperience",
              args.resume,
              (draft) => {
                draft.results.push(newExperience);
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
          const updatedExperience = data.results;

          // Update the cache for listExperience
          dispatch(
            resumeExperienceApi.util.updateQueryData(
              "listExperience",
              args.resume,
              (draft) => {
                const index = draft.results.findIndex(
                  (item) => item._id === updatedExperience._id
                );
                if (index !== -1) {
                  draft.results[index] = updatedExperience;
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
