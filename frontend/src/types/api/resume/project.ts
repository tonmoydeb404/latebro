import { ApiResponse } from "..";
import { ResumeProject } from "../../resume";

// ----------------------------------------------------------------------

export type ProjectListResponse = ApiResponse<ResumeProject[]>;

// ----------------------------------------------------------------------

export type ProjectCreatePayload = Pick<
  ResumeProject,
  | "resume"
  | "name"
  | "description"
  | "caseStudyUrl"
  | "previewUrl"
  | "sourceUrl"
  | "tools"
>;
export type ProjectCreateResponse = ApiResponse<ResumeProject>;

// ----------------------------------------------------------------------

export type ProjectUpdatePayload = Partial<
  Pick<
    ResumeProject,
    | "name"
    | "description"
    | "caseStudyUrl"
    | "previewUrl"
    | "sourceUrl"
    | "tools"
  >
> &
  ProjectDeletePayload;

export type ProjectUpdateResponse = ApiResponse<ResumeProject>;

// ----------------------------------------------------------------------

export type ProjectDeletePayload = {
  _id: string;
  resume: string;
};

export type ProjectDeleteResponse = ApiResponse<ResumeProject>;

// ----------------------------------------------------------------------
