export type Resume = {
  _id: string;
  title: string;
  profile: ResumeProfile;
  contact: ResumeContact;
  projects: ResumeProject[];
  educations: ResumeEducation[];
  experiences: ResumeExperience[];
  skills: ResumeSkill[];
  socials: ResumeSocial[];
  languages: ResumeLanguage[];
};

export type ResumeProfile = {
  _id: string;
  name: string;
  profession: string;
  bio: string;
  avatar: string | null;
};

export type ResumeContact = {
  _id: string;
  phone: string;
  email: string;
  address: string;
  addressLink: string | null;
  website: string;
};

export type ResumeEducation = {
  _id: string;
  instituteName: string;
  description: string;
  startedAt: string;
  endedAt: string | null;
  isCurrent: boolean;
  subject: string;
};

export type ResumeExperience = {
  _id: string;
  companyName: string;
  position: string;
  description: string;
  startedAt: string;
  endedAt: string | null;
  isCurrent: boolean;
};

export type ResumeProject = {
  _id: string;
  name: string;
  description: string;
  previewLink: string;
  sourceLink: string;
  caseStudyLink: string;
  tools: string;
};

export type ResumeSkill = {
  _id: string;
  title: string;
  experience: ResumeSkillExperience;
};

export type ResumeLanguage = {
  _id: string;
  title: string;
  experience: ResumeLanguageExperience;
};

export type ResumeSocial = {
  _id: string;
  type: ResumeSocialType;
  title: string;
  url: string;
};

export enum ResumeSkillExperience {
  Beginner = "Beginner",
  Junior = "Junior",
  MidLevel = "Mid-level",
  Senior = "Senior",
  Expert = "Expert",
}

export enum ResumeLanguageExperience {
  Native = "Native",
  Fluent = "Fluent",
  Proficient = "Proficient",
  Basic = "Basic",
}

export enum ResumeSocialType {
  Codepen = "codepen",
  GitHub = "github",
  Dribble = "dribble",
  LinkedIn = "linkedin",
  Medium = "medium",
  GitLab = "gitlab",
  X = "x",
  Tableau = "tableau",
  StackOverflow = "stackoverflow",
  ReplIt = "repl_it",
  Behance = "behance",
  Hashnode = "hashnode",
  DevTo = "dev_to",
  Instagram = "instagram",
  YouTube = "youtube",
  Facebook = "facebook",
}
