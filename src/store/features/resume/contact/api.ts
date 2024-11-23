import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  ContactGetResponse,
  ContactUpdatePayload,
  ContactUpdateResponse,
} from "@/types/api/resume/contact";
import { createApi } from "@reduxjs/toolkit/query/react";
import resumeApi from "../api";

const resumeContactApi = createApi({
  reducerPath: "resumeContactApi",
  baseQuery: backendBaseQuery("/resumes"),
  tagTypes: ["Contact"], // Define tag type
  endpoints: (builder) => ({
    getContact: builder.query<ContactGetResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/contact`,
      }),
      providesTags: (result, error, resumeId) => [
        { type: "Contact", id: resumeId },
      ],
    }),
    updateContact: builder.mutation<
      ContactUpdateResponse,
      ContactUpdatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resume}/contact`,
        body: payload,
        method: "PATCH",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled; // Await API response
          const updateContact = data.results;

          // Update the cache for listEducation
          dispatch(
            resumeContactApi.util.updateQueryData(
              "getContact",
              args.resume,
              (draft) => {
                draft.results = { ...draft.results, ...updateContact };
              }
            )
          );

          // Update the cache for getResume
          dispatch(
            resumeApi.util.updateQueryData(
              "getResume",
              args.resume,
              (draft) => {
                draft.results.contact = {
                  ...draft.results.contact,
                  ...updateContact,
                };
              }
            )
          );
        } catch (error) {
          console.error("Failed to update contact cache:", error);
        }
      },
    }),
  }),
});

export const {
  useGetContactQuery,
  useLazyGetContactQuery,
  useUpdateContactMutation,
} = resumeContactApi;
export default resumeContactApi;
