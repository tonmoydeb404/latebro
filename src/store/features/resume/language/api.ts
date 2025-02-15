import resumeDB from "@/db/resume";
import {
  LanguageCreatePayload,
  LanguageDeletePayload,
  LanguageUpdatePayload,
} from "@/types/api/resume/language";
import { ResumeLanguage } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeLanguageApi = createApi({
  reducerPath: "resumeLanguageApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Language"],
  endpoints: (builder) => ({
    listLanguage: builder.query<ResumeLanguage[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.languages
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
                type: "Language" as const,
                id: _id,
              })),
              { type: "Language", id: resumeId },
            ]
          : [{ type: "Language", id: resumeId }],
    }),
    createLanguage: builder.mutation<ResumeLanguage, LanguageCreatePayload>({
      queryFn: async (payload) => {
        try {
          const newLanguage = { ...payload, _id: nanoid() };
          await resumeDB.languages.add(newLanguage);
          return { data: newLanguage };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Language", id: result.resume }]
          : [{ type: "Language" }],
    }),
    updateLanguage: builder.mutation<ResumeLanguage, LanguageUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.languages.update(payload._id, payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Language", id: result?._id }],
    }),
    deleteLanguage: builder.mutation<string, LanguageDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.languages.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Language", id: result }],
    }),
  }),
});

export const {
  useCreateLanguageMutation,
  useLazyListLanguageQuery,
  useListLanguageQuery,
  useDeleteLanguageMutation,
  useUpdateLanguageMutation,
} = resumeLanguageApi;
export default resumeLanguageApi;
