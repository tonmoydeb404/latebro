import { ApiResponse } from "..";
import { ResumeProfile, ResumeSocial } from "../../resume";

// ----------------------------------------------------------------------

export type ProfileGetResponse = ApiResponse<ResumeProfile>;

// ----------------------------------------------------------------------

export type ProfileUpdatePayload = Partial<
  Pick<ResumeProfile, "name" | "avatar" | "bio" | "profession">
> & { resume: string };

export type ProfileUpdateResponse = ApiResponse<ResumeSocial>;

// ----------------------------------------------------------------------
