import { ApiResponse } from ".";
import { ResumeEducation } from "../resume";

// ----------------------------------------------------------------------

export type EducationListResponse = ApiResponse<ResumeEducation[]>;

// ----------------------------------------------------------------------

export type EducationCreatePayload = {
  resume: string;
  instituteName: string;
  description?: string;
  subject: string;
  startedAt?: string;
  endedAt?: string;
};
export type EducationCreateResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------

export type EducationUpdatePayload = {
  _id: string;
  resume: string;
  instituteName?: string;
  description?: string;
  subject?: string;
  startedAt?: string;
  endedAt?: string;
};

export type EducationUpdateResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------

export type EducationDeletePayload = {
  _id: string;
  resume: string;
};

export type EducationDeleteResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------
