import { ApiResponse } from "..";
import { Resume } from "../../resume";

// ----------------------------------------------------------------------

export type ResumeListResponse = ApiResponse<Resume[]>;

// ----------------------------------------------------------------------

export type ResumeGetResponse = ApiResponse<Resume>;

// ----------------------------------------------------------------------

export type ResumeCreatePayload = Pick<Resume, "title">;
export type ResumeCreateResponse = ApiResponse<Resume>;

// ----------------------------------------------------------------------

export type ResumeUpdatePayload = Pick<Resume, "title" | "_id">;
export type ResumeUpdateResponse = ApiResponse<Resume>;

// ----------------------------------------------------------------------

export type ResumeDeletePayload = Pick<Resume, "_id">;
export type ResumeDeleteResponse = ApiResponse<Resume>;

// ----------------------------------------------------------------------
