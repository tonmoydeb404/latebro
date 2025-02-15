import resumeDB from "@/db/resume";
import {
  ExperienceCreatePayload,
  ExperienceDeletePayload,
  ExperienceUpdatePayload,
} from "@/types/api/resume/experience";
import { ResumeExperience } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeExperienceApi = createApi({
  reducerPath: "resumeExperienceApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Experience"],
  endpoints: (builder) => ({
    listExperience: builder.query<ResumeExperience[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.experiences
            .where("resume")
            .equals(resumeId)
            .toArray();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, resumeId) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Experience" as const,
                id: _id,
              })),
              { type: "Experience", id: resumeId },
            ]
          : [{ type: "Experience", id: resumeId }],
    }),
    createExperience: builder.mutation<
      ResumeExperience,
      ExperienceCreatePayload
    >({
      queryFn: async (payload) => {
        try {
          const newExperience = { ...payload, _id: nanoid() };
          await resumeDB.experiences.add(newExperience);
          return { data: newExperience };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Experience", id: result.resume }]
          : [{ type: "Experience" }],
    }),
    updateExperience: builder.mutation<
      ResumeExperience,
      ExperienceUpdatePayload
    >({
      queryFn: async (payload) => {
        try {
          await resumeDB.experiences.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Experience", id: result?._id }],
    }),
    deleteExperience: builder.mutation<string, ExperienceDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.experiences.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Experience", id: result }],
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
