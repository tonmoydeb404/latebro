import { ApiResponse } from "..";
import { ResumeEducation } from "../../resume";

// ----------------------------------------------------------------------

export type EducationListResponse = ApiResponse<ResumeEducation[]>;

// ----------------------------------------------------------------------

export type EducationCreatePayload = Pick<
  ResumeEducation,
  | "instituteName"
  | "description"
  | "endedAt"
  | "startedAt"
  | "subject"
  | "resume"
>;
export type EducationCreateResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------

export type EducationUpdatePayload = Partial<ResumeEducation> &
  EducationDeletePayload;

export type EducationUpdateResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------

export type EducationDeletePayload = {
  _id: string;
  resume: string;
};

export type EducationDeleteResponse = ApiResponse<ResumeEducation>;

// ----------------------------------------------------------------------
