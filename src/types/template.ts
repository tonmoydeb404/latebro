import { EditorColors } from "./editor";
import { Resume } from "./resume";

export type TemplateProps = { data: Resume; theme: EditorColors | null };

export type Template = {
  title: string;
  text: string;
  id: string;
  theme: {
    colors: EditorColors;
  };
};
