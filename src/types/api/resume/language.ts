import { ApiResponse } from "..";
import { ResumeLanguage } from "../../resume";

// ----------------------------------------------------------------------

export type LanguageListResponse = ApiResponse<ResumeLanguage[]>;

// ----------------------------------------------------------------------

export type LanguageCreatePayload = Pick<
  ResumeLanguage,
  "experience" | "title" | "resume"
>;
export type LanguageCreateResponse = ApiResponse<ResumeLanguage>;

// ----------------------------------------------------------------------

export type LanguageUpdatePayload = ResumeLanguage;

export type LanguageUpdateResponse = ApiResponse<ResumeLanguage>;

// ----------------------------------------------------------------------

export type LanguageDeletePayload = {
  _id: string;
  resume: string;
};

export type LanguageDeleteResponse = ApiResponse<ResumeLanguage>;

// ----------------------------------------------------------------------
