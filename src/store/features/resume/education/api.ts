import resumeDB from "@/db/resume";
import {
  EducationCreatePayload,
  EducationDeletePayload,
  EducationUpdatePayload,
} from "@/types/api/resume/education";
import { ResumeEducation } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeEducationApi = createApi({
  reducerPath: "resumeEducationApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Education"],
  endpoints: (builder) => ({
    listEducation: builder.query<ResumeEducation[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.educations
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
                type: "Education" as const,
                id: _id,
              })),
              { type: "Education", id: resumeId },
            ]
          : [{ type: "Education", id: resumeId }],
    }),
    createEducation: builder.mutation<ResumeEducation, EducationCreatePayload>({
      queryFn: async (payload) => {
        try {
          const newEducation = { ...payload, _id: nanoid() };
          await resumeDB.educations.add(newEducation);
          return { data: newEducation };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Education", id: result.resume }]
          : [{ type: "Education" }],
    }),
    updateEducation: builder.mutation<ResumeEducation, EducationUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.educations.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Education", id: result?._id }],
    }),
    deleteEducation: builder.mutation<string, EducationDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.educations.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Education", id: result }],
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
