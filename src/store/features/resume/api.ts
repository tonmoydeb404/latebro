import resumeDB from "@/db/resume";
import { ResumeCreatePayload, ResumeUpdatePayload } from "@/types/api/resume";
import { Resume } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeApi = createApi({
  reducerPath: "resumeApi",
  tagTypes: ["Resume"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    listResume: builder.query<Resume[], void>({
      queryFn: async () => {
        try {
          const data = await resumeDB.resumes.toArray();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Resume" as const,
                id: _id,
              })),
              { type: "Resume" },
            ]
          : [{ type: "Resume" }],
    }),

    getResume: builder.query<Resume, string>({
      queryFn: async (id) => {
        try {
          const data = await resumeDB.resumes.get(id);
          if (!data) throw new Error("Not found");
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, id) => [{ type: "Resume", id }],
    }),

    createResume: builder.mutation<Resume, ResumeCreatePayload>({
      queryFn: async (payload) => {
        try {
          const _id = nanoid(); // Generate unique ID

          // Use Dexie transaction with all related stores
          await resumeDB.transaction(
            "rw",
            resumeDB.resumes,
            resumeDB.profiles,
            resumeDB.contacts,
            async () => {
              await resumeDB.resumes.add({ ...payload, _id });
              await resumeDB.profiles.add({
                resume: _id,
              });
              await resumeDB.contacts.add({
                resume: _id,
              });
            }
          );

          // Fetch the created resume
          const data = await resumeDB.resumes.get(_id);
          if (!data) throw new Error("Resume creation failed");

          return { data };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Resume" }, { type: "Resume", id: result._id }]
          : [{ type: "Resume" }],
    }),

    updateResume: builder.mutation<Resume, ResumeUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.resumes.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Resume", id: result?._id }],
    }),

    deleteResume: builder.mutation<string, string>({
      queryFn: async (id) => {
        try {
          await resumeDB.resumes.delete(id);
          return { data: id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Resume", id: result }],
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useLazyListResumeQuery,
  useListResumeQuery,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
  useGetResumeQuery,
  useLazyGetResumeQuery,
} = resumeApi;
export default resumeApi;
