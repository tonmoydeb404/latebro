import { ApiResponse } from "..";
import { ResumeProfile, ResumeProject } from "../../resume";

// ----------------------------------------------------------------------

export type ProfileGetResponse = ApiResponse<ResumeProfile>;

// ----------------------------------------------------------------------

export type ProfileUpdatePayload = ResumeProfile;

export type ProfileUpdateResponse = ApiResponse<ResumeProject>;

// ----------------------------------------------------------------------
