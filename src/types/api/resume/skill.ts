import { ApiResponse } from "..";
import { ResumeSkill } from "../../resume";

// ----------------------------------------------------------------------

export type SkillListResponse = ApiResponse<ResumeSkill[]>;

// ----------------------------------------------------------------------

export type SkillCreatePayload = Pick<
  ResumeSkill,
  "experience" | "title" | "resume"
>;
export type SkillCreateResponse = ApiResponse<ResumeSkill>;

// ----------------------------------------------------------------------

export type SkillUpdatePayload = Partial<
  Pick<ResumeSkill, "experience" | "title">
> &
  SkillDeletePayload;

export type SkillUpdateResponse = ApiResponse<ResumeSkill>;

// ----------------------------------------------------------------------

export type SkillDeletePayload = {
  _id: string;
  resume: string;
};

export type SkillDeleteResponse = ApiResponse<ResumeSkill>;

// ----------------------------------------------------------------------
