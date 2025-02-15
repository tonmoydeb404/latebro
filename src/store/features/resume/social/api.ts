import resumeDB from "@/db/resume";
import {
  SocialCreatePayload,
  SocialDeletePayload,
  SocialUpdatePayload,
} from "@/types/api/resume/social";
import { ResumeSocial } from "@/types/resume";
import { nanoid } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeSocialApi = createApi({
  reducerPath: "resumeSocialApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Social"],
  endpoints: (builder) => ({
    listSocial: builder.query<ResumeSocial[], string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.socials
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
                type: "Social" as const,
                id: _id,
              })),
              { type: "Social", id: resumeId },
              { type: "Social" },
            ]
          : [{ type: "Social", id: resumeId }, { type: "Social" }],
    }),
    createSocial: builder.mutation<ResumeSocial, SocialCreatePayload>({
      queryFn: async (payload) => {
        try {
          const newSocial = { ...payload, _id: nanoid() };
          await resumeDB.socials.add(newSocial);
          return { data: newSocial };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) =>
        result
          ? [{ type: "Social" }, { type: "Social", id: result.resume }]
          : [{ type: "Social" }],
    }),
    updateSocial: builder.mutation<ResumeSocial, SocialUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.socials.put(payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Social", id: result?._id },
        { type: "Social", id: result?.resume },
      ],
    }),
    deleteSocial: builder.mutation<string, SocialDeletePayload>({
      queryFn: async ({ resume, _id }) => {
        try {
          await resumeDB.socials.delete(_id);
          return { data: _id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Social", id: result },
        { type: "Social" },
      ],
    }),
  }),
});

export const {
  useCreateSocialMutation,
  useLazyListSocialQuery,
  useListSocialQuery,
  useDeleteSocialMutation,
  useUpdateSocialMutation,
} = resumeSocialApi;
export default resumeSocialApi;
