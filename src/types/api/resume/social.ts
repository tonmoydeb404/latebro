import { ApiResponse } from "..";
import { ResumeSocial } from "../../resume";

// ----------------------------------------------------------------------

export type SocialListResponse = ApiResponse<ResumeSocial[]>;

// ----------------------------------------------------------------------

export type SocialCreatePayload = Pick<
  ResumeSocial,
  "type" | "title" | "url" | "resume"
>;
export type SocialCreateResponse = ApiResponse<ResumeSocial>;

// ----------------------------------------------------------------------

export type SocialUpdatePayload = Pick<ResumeSocial, "type" | "title" | "url"> &
  SocialDeletePayload;

export type SocialUpdateResponse = ApiResponse<ResumeSocial>;

// ----------------------------------------------------------------------

export type SocialDeletePayload = {
  _id: string;
  resume: string;
};

export type SocialDeleteResponse = ApiResponse<ResumeSocial>;

// ----------------------------------------------------------------------
