import resumeDB from "@/db/resume";
import { ContactUpdatePayload } from "@/types/api/resume/contact";
import { ResumeContact } from "@/types/resume";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const resumeContactApi = createApi({
  reducerPath: "resumeContactApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContact: builder.query<ResumeContact, string>({
      queryFn: async (resumeId) => {
        try {
          const data = await resumeDB.contacts
            .where("resume")
            .equals(resumeId)
            .first();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, resumeId) => [
        { type: "Contact", id: resumeId },
      ],
    }),
    updateContact: builder.mutation<ResumeContact, ContactUpdatePayload>({
      queryFn: async (payload) => {
        try {
          await resumeDB.contacts.update(payload.resume, payload);
          return { data: payload };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result) => [{ type: "Contact", id: result?.resume }],
    }),
  }),
});

export const {
  useGetContactQuery,
  useLazyGetContactQuery,
  useUpdateContactMutation,
} = resumeContactApi;
export default resumeContactApi;
