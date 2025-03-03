export type Resume = {
  _id: string;
  title: string;
};

export type ResumeProfile = {
  resume: string;
  name?: string;
  profession?: string;
  bio?: string;
  avatar?: string | null;
};

export type ResumeContact = {
  resume: string;
  phone?: string;
  email?: string;
  address?: string;
  address_link?: string | null;
  website?: string;
};

export type ResumeEducation = {
  _id: string;
  instituteName: string;
  description?: string;
  startedAt: string;
  endedAt: string | null;
  subject: string;
  resume: string;
};

export type ResumeExperience = {
  _id: string;
  companyName: string;
  position: string;
  description?: string;
  startedAt: string;
  endedAt: string | null;
  resume: string;
};

export type ResumeProject = {
  _id: string;
  name: string;
  description?: string;
  previewUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
  tools: string[];
  resume: string;
};

export type ResumeSkill = {
  _id: string;
  title: string;
  experience: ResumeSkillExperience;
  resume: string;
};

export type ResumeLanguage = {
  _id: string;
  title: string;
  experience: ResumeLanguageExperience;
  resume: string;
};

export type ResumeSocial = {
  _id: string;
  type: ResumeSocialType;
  title: string;
  url: string;
  resume: string;
};

export type ResumeSkillExperience =
  | "beginner"
  | "junior"
  | "mid_level"
  | "senior"
  | "expert";

export type ResumeLanguageExperience =
  | "native"
  | "fluent"
  | "proficient"
  | "basic";

export type ResumeSocialType =
  | "codepen"
  | "github"
  | "dribble"
  | "linkedin"
  | "medium"
  | "gitlab"
  | "x"
  | "tableau"
  | "stackoverflow"
  | "repl_it"
  | "behance"
  | "hashnode"
  | "dev_to"
  | "instagram"
  | "youtube"
  | "facebook";
