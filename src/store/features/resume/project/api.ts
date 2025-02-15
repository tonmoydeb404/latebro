import resumeDB from "@/db/resume";
import {
  ProjectCreatePayload,
  ProjectDeletePayload,
  ProjectUpdatePayload,
} from "@/types/api/resume/project";
import { ResumeProject } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeProjectApi = createApi({
  reducerPath: "resumeProjectApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    listProject: builder.query<ResumeProject[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.projects
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
                type: "Project" as const,
                id: _id,
              })),
              { type: "Project", id: resumeId },
              { type: "Project" },
            ]
          : [{ type: "Project", id: resumeId }, { type: "Project" }],
    }),
    createProject: builder.mutation<ResumeProject, ProjectCreatePayload>({
      queryFn: async (payload) => {
        try {
          const newProject = { ...payload, _id: nanoid() };
          await resumeDB.projects.add(newProject);
          return { data: newProject };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Project" }, { type: "Project", id: result.resume }]
          : [{ type: "Project" }],
    }),
    updateProject: builder.mutation<ResumeProject, ProjectUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.projects.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Project", id: result?._id },
        { type: "Project", id: result?.resume },
      ],
    }),
    deleteProject: builder.mutation<string, ProjectDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.projects.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Project", id: result },
        { type: "Project" },
      ],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useLazyListProjectQuery,
  useListProjectQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = resumeProjectApi;
export default resumeProjectApi;
