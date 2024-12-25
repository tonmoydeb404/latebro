import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  SkillCreatePayload,
  SkillCreateResponse,
  SkillDeletePayload,
  SkillDeleteResponse,
  SkillListResponse,
  SkillUpdatePayload,
  SkillUpdateResponse,
} from "@/types/api/resume/skill";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeSkillApi = createApi({
  reducerPath: "resumeSkillApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Skill"], // Define tag type
  endpoints: (builder) => ({
    listSkill: builder.query<SkillListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/skills`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Skill", id: resumeId },
      ],
    }),
    createSkill: builder.mutation<SkillCreateResponse, SkillCreatePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/skills`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Manually update the cache for listSkill
          dispatch(
            resumeSkillApi.util.updateQueryData(
              "listSkill",
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
                draft.results.skills.push(updates);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update skill cache:", error);
        }
      },
    }),
    updateSkill: builder.mutation<SkillUpdateResponse, SkillUpdatePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/skills/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Update the cache for listSkill
          dispatch(
            resumeSkillApi.util.updateQueryData(
              "listSkill",
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
                const index = draft.results.skills.findIndex(
                  (item) => item._id === updates._id
                );
                if (index !== -1) {
                  draft.results.skills[index] = updates;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update skill cache:", error);
        }
      },
    }),
    deleteSkill: builder.mutation<SkillDeleteResponse, SkillDeletePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/skills/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the skill from the cache for listSkill
          dispatch(
            resumeSkillApi.util.updateQueryData(
              "listSkill",
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
                draft.results.skills = draft.results.skills.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update skill cache:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useLazyListSkillQuery,
  useListSkillQuery,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
} = resumeSkillApi;
export default resumeSkillApi;
