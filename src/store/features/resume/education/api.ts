import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  EducationCreatePayload,
  EducationCreateResponse,
  EducationListResponse,
} from "@/types/api/resume";
import { createApi } from "@reduxjs/toolkit/query/react";

const resumeEducationApi = createApi({
  reducerPath: "resumeEducationApi",
  baseQuery: backendBaseQuery("/resumes"),
  endpoints: (builder) => ({
    listEducation: builder.query<EducationListResponse, string>({
      query: (resumeId) => ({
        url: `/${resumeId}/educations`,
      }),
    }),
    createEducation: builder.mutation<
      EducationCreateResponse,
      EducationCreatePayload
    >({
      query: (payload) => ({
        url: `/${payload.resumeId}/educations`,
        body: payload,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useLazyListEducationQuery,
  useListEducationQuery,
} = resumeEducationApi;
export default resumeEducationApi;
