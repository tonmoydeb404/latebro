import { Resume } from "./resume";

export type EditorTheme = {
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
  theme: EditorTheme | null;
}
