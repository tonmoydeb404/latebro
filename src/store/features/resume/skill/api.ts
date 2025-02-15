import resumeDB from "@/db/resume";
import {
  SkillCreatePayload,
  SkillDeletePayload,
  SkillUpdatePayload,
} from "@/types/api/resume/skill";
import { ResumeSkill } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeSkillApi = createApi({
  reducerPath: "resumeSkillApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Skill"],
  endpoints: (builder) => ({
    listSkill: builder.query<ResumeSkill[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.skills
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
                type: "Skill" as const,
                id: _id,
              })),
              { type: "Skill", id: resumeId },
              { type: "Skill" },
            ]
          : [{ type: "Skill", id: resumeId }, { type: "Skill" }],
    }),
    createSkill: builder.mutation<ResumeSkill, SkillCreatePayload>({
      queryFn: async (payload) => {
        try {
          const newSkill = { ...payload, _id: nanoid() };
          await resumeDB.skills.add(newSkill);
          return { data: newSkill };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Skill" }, { type: "Skill", id: result.resume }]
          : [{ type: "Skill" }],
    }),
    updateSkill: builder.mutation<ResumeSkill, SkillUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.skills.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Skill", id: result?._id },
        { type: "Skill", id: result?.resume },
      ],
    }),
    deleteSkill: builder.mutation<string, SkillDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.skills.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Skill", id: result },
        { type: "Skill" },
      ],
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
