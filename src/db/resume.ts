import {
  Resume,
  ResumeContact,
  ResumeEducation,
  ResumeExperience,
  ResumeLanguage,
  ResumeProfile,
  ResumeProject,
  ResumeSkill,
  ResumeSocial,
} from "@/types/resume";
import Dexie, { Table } from "dexie";

class ResumeDB extends Dexie {
  resumes!: Table<Resume, string>;
  profiles!: Table<ResumeProfile, string>;
  contacts!: Table<ResumeContact, string>;
  educations!: Table<ResumeEducation, string>;
  experiences!: Table<ResumeExperience, string>;
  projects!: Table<ResumeProject, string>;
  skills!: Table<ResumeSkill, string>;
  languages!: Table<ResumeLanguage, string>;
  socials!: Table<ResumeSocial, string>;

  constructor() {
    super("ResumeDB");

    this.version(1).stores({
      resumes: "_id, title",
      profiles: "_id, resume, name, profession",
      contacts: "_id, resume",
      educations: "_id, resume",
      experiences: "_id, resume",
      projects: "_id, resume",
      skills: "_id, resume",
      languages: "_id, resume",
      socials: "_id, resume",
    });
  }
}

const resumeDB = new ResumeDB();

export default resumeDB;
