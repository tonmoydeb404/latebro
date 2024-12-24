import { Resume } from "./resume";
import { Template } from "./template";

export type EditorColors = {
  background: string;
  foreground: string;
  secondary: string;
  primary: string;
  muted: string;
};

export type EditorState =
  | "LOADING"
  | "LOADED"
  | "IDLE"
  | "NAVIGATING"
  | "ERROR";

export interface EditorSlice {
  nav: number;
  resume: Resume | null;
  tab: number;
  state: EditorState;
  colors: EditorColors | null;
  template: Template | null;
}
