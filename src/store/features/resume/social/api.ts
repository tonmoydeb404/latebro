import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  SocialCreatePayload,
  SocialCreateResponse,
  SocialDeletePayload,
  SocialDeleteResponse,
  SocialListResponse,
  SocialUpdatePayload,
  SocialUpdateResponse,
} from "@/types/api/resume/social";
import { createApi } from "@reduxjs/toolkit/query/react";

const resumeSocialApi = createApi({
  reducerPath: "resumeSocialApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Social"], // Define tag type
  endpoints: (builder) => ({
    listSocial: builder.query<SocialListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/socials`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Social", id: resumeId },
      ],
    }),
    createSocial: builder.mutation<SocialCreateResponse, SocialCreatePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/socials`,
        body: payload,
        method: "POST",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const newSocial = data.results;

          // Manually update the cache for listSocial
          dispatch(
            resumeSocialApi.util.updateQueryData(
              "listSocial",
              args.resume,
              (draft) => {
                draft.results.push(newSocial);
              }
            )
          );
        } catch (error) {
          console.error("Failed to update social cache:", error);
        }
      },
    }),
    updateSocial: builder.mutation<SocialUpdateResponse, SocialUpdatePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/socials/${payload._id}`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updatedSocial = data.results;

          // Update the cache for listSocial
          dispatch(
            resumeSocialApi.util.updateQueryData(
              "listSocial",
              args.resume,
              (draft) => {
                const index = draft.results.findIndex(
                  (item) => item._id === updatedSocial._id
                );
                if (index !== -1) {
                  draft.results[index] = updatedSocial;
                }
              }
            )
          );
        } catch (error) {
          console.error("Failed to update social cache:", error);
        }
      },
    }),
    deleteSocial: builder.mutation<SocialDeleteResponse, SocialDeletePayload>({
      query: (payload) => ({
        url: `/${payload.resume}/socials/${payload._id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled; // Await API success

          // Remove the social from the cache for listSocial
          dispatch(
            resumeSocialApi.util.updateQueryData(
              "listSocial",
              args.resume,
              (draft) => {
                draft.results = draft.results.filter(
                  (item) => item._id !== args._id
                );
              }
            )
          );
        } catch (error) {
          console.error("Failed to update social cache:", error);
        }
      },
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
