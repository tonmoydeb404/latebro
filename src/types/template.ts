import { EditorColors, EditorFontFamily, EditorFontSizes } from "./editor";
import { Resume } from "./resume";

export type TemplateProps = {
  data: Resume;
  colors?: EditorColors;
  fontSizes?: EditorFontSizes;
  fontFamily?: EditorFontFamily;
};

export type Template = {
  title: string;
  cover: string;
  text: string;
  id: string;
  theme: {
    colors: EditorColors;
    fontSizes: EditorFontSizes;
    fontFamily: EditorFontFamily;
  };
};
