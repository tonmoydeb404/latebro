import { fonts } from "@/lib/react-pdf/fonts";
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
} from "./resume";
import { Template } from "./template";

export type EditorColorsKeys =
  | "background"
  | "foreground"
  | "secondary"
  | "primary"
  | "muted"
  | "primary_foreground";
export type EditorColors = Record<EditorColorsKeys, string>;

export type EditorFontSizesKeys = "xs" | "sm" | "md" | "lg" | "xl";
export type EditorFontSizes = Record<EditorFontSizesKeys, number>;
export type EditorFontFamily = keyof typeof fonts;

export type EditorTypography = {
  sizes: EditorFontSizes;
  family: EditorFontFamily;
};

export type EditorState =
  | "LOADING"
  | "LOADED"
  | "IDLE"
  | "NAVIGATING"
  | "ERROR";

export type EditorSliceResume = Resume & {
  contact: ResumeContact;
  profile: ResumeProfile;
  educations: ResumeEducation[];
  experiences: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  languages: ResumeLanguage[];
  socials: ResumeSocial[];
};

export interface EditorSlice {
  nav: number;
  resume: EditorSliceResume | null;
  tab: number;
  state: EditorState;
  template: Template | null;
  colors: EditorColors;
  typography: EditorTypography;
}
