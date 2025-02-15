import resumeDB from "@/db/resume";
import { ProfileUpdatePayload } from "@/types/api/resume/profile";
import { ResumeProfile } from "@/types/resume";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeProfileApi = createApi({
  reducerPath: "resumeProfileApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query<ResumeProfile, string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.profiles
            .where("resume")
            .equals(resumeId)
            .first();
          return data ? { data } : { error: "Profile not found" };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, resumeId) => [
        { type: "Profile", resume: resumeId },
      ],
    }),
    updateProfile: builder.mutation<ResumeProfile, ProfileUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.profiles.update(payload.resume, payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [
        { type: "Profile", resume: result?.resume },
      ],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
} = resumeProfileApi;
export default resumeProfileApi;
