import { ApiResponse } from "..";
import { ResumeExperience } from "../../resume";

// ----------------------------------------------------------------------

export type ExperienceListResponse = ApiResponse<ResumeExperience[]>;

// ----------------------------------------------------------------------

export type ExperienceCreatePayload = Pick<
  ResumeExperience,
  | "resume"
  | "companyName"
  | "description"
  | "position"
  | "endedAt"
  | "startedAt"
>;
export type ExperienceCreateResponse = ApiResponse<ResumeExperience>;

// ----------------------------------------------------------------------

export type ExperienceUpdatePayload = Partial<
  Pick<
    ResumeExperience,
    "companyName" | "description" | "position" | "endedAt" | "startedAt"
  >
> &
  ExperienceDeletePayload;

export type ExperienceUpdateResponse = ApiResponse<ResumeExperience>;

// ----------------------------------------------------------------------

export type ExperienceDeletePayload = {
  _id: string;
  resume: string;
};

export type ExperienceDeleteResponse = ApiResponse<ResumeExperience>;

// ----------------------------------------------------------------------
