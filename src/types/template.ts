import {
  EditorColors,
  EditorFontFamily,
  EditorFontSizes,
  EditorSliceResume,
} from "./editor";

export type TemplateProps = {
  data: EditorSliceResume;
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
