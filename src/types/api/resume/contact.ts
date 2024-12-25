import { ApiResponse } from "..";
import { ResumeContact } from "../../resume";

// ----------------------------------------------------------------------

export type ContactGetResponse = ApiResponse<ResumeContact>;

// ----------------------------------------------------------------------

export type ContactUpdatePayload = Partial<
  Pick<
    ResumeContact,
    "address" | "address_link" | "email" | "phone" | "website"
  >
> & { resume: string };

export type ContactUpdateResponse = ApiResponse<ResumeContact>;

// ----------------------------------------------------------------------
