import { ApiResponse } from ".";
import { ResumeEducation } from "../resume";

export type EducationCreatePayload = {
  resumeId: string;
  instituteName: string;
  description?: string;
  subject: string;
  startedAt?: string;
  endedAt?: string;
};

export type EducationCreateResponse = ApiResponse<ResumeEducation>;

export type EducationListResponse = ApiResponse<ResumeEducation[]>;
