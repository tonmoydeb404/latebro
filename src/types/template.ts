import { EditorColors } from "./editor";
import { Resume } from "./resume";

export type TemplateProps = { data: Resume; colors: EditorColors | null };

export type Template = {
  title: string;
  cover: string;
  text: string;
  id: string;
  theme: {
    colors: EditorColors;
  };
};
