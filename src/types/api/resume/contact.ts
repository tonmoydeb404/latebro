import { ApiResponse } from "..";
import { ResumeContact } from "../../resume";

// ----------------------------------------------------------------------

export type ContactGetResponse = ApiResponse<ResumeContact>;

// ----------------------------------------------------------------------

export type ContactUpdatePayload = ResumeContact;

export type ContactUpdateResponse = ApiResponse<ResumeContact>;

// ----------------------------------------------------------------------
