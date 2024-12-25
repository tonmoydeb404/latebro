import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  ProjectCreatePayload,
  ProjectCreateResponse,
  ProjectDeletePayload,
  ProjectDeleteResponse,
  ProjectListResponse,
  ProjectUpdatePayload,
  ProjectUpdateResponse,
} from "@/types/api/resume/project";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeProjectApi = createApi({
  reducerPath: "resumeProjectApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Project"], // Define tag type
  endpoints: (builder) => ({
    listProject: builder.query<ProjectListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/projects`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Project", id: resumeId },
      ],
    }),
    createProject: builder.mutation<
      ProjectCreateResponse,
      ProjectCreatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/projects`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Manually update the cache for listProject
          dispatch(
            resumeProjectApi.util.updateQueryData(
              "listProject",
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
                draft.results.projects.push(updates);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update project cache:", error);
        }
      },
    }),
    updateProject: builder.mutation<
      ProjectUpdateResponse,
      ProjectUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/projects/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Update the cache for listProject
          dispatch(
            resumeProjectApi.util.updateQueryData(
              "listProject",
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
                const index = draft.results.projects.findIndex(
                  (item) => item._id === updates._id
                );
                if (index !== -1) {
                  draft.results.projects[index] = updates;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update project cache:", error);
        }
      },
    }),
    deleteProject: builder.mutation<
      ProjectDeleteResponse,
      ProjectDeletePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/projects/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the project from the cache for listProject
          dispatch(
            resumeProjectApi.util.updateQueryData(
              "listProject",
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
                draft.results.projects = draft.results.projects.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update project cache:", error);
        }
      },
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
