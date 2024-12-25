import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  ProfileGetResponse,
  ProfileUpdatePayload,
  ProfileUpdateResponse,
} from "@/types/api/resume/profile";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeProfileApi = createApi({
  reducerPath: "resumeProfileApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Profile"], // Define tag type
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileGetResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/profile`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Profile", id: resumeId },
      ],
    }),
    updateProfile: builder.mutation<
      ProfileUpdateResponse,
      ProfileUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/profile`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updates = data.results;

          // Update the cache for listEducation
          dispatch(
            resumeProfileApi.util.updateQueryData(
              "getProfile",
              args.resume,
              (draft) => {
                draft.results = { ...draft.results, ...updates };
              }
            )
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData(
              "getResume",
              args.resume,
              (draft) => {
                draft.results.profile = {
                  ...draft.results.profile,
                  ...updates,
                };
              }
            )
          );
        } catch (error) {
          console.error("Failed to update profile cache:", error);
        }
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
} = resumeProfileApi;
export default resumeProfileApi;
