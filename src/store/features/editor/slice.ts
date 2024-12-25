import { RootState } from "@/store";
import {
  EditorColors,
  EditorFontFamily,
  EditorFontSizes,
  EditorSlice,
} from "@/types/editor";
import { Resume } from "@/types/resume";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: EditorSlice = {
  nav: 0,
  tab: 0,
  resume: null,
  state: "LOADING",
  template: null,
  colors: {} as any,
  typography: {} as any,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setNav: (state, action: PayloadAction<number>) => {
      state.nav = action.payload;
    },
    setTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload;
    },
    setState: (state, action: PayloadAction<EditorSlice["state"]>) => {
      state.state = action.payload;
    },
    setResume: (state, action: PayloadAction<Resume | null>) => {
      state.resume = action.payload;
    },
    setColors: (state, action: PayloadAction<Partial<EditorColors>>) => {
      state.colors = { ...state.colors, ...action.payload };
    },
    setTemplate: (state, action: PayloadAction<EditorSlice["template"]>) => {
      state.template = action.payload;
    },
    setTypographyFont: (state, action: PayloadAction<EditorFontFamily>) => {
      state.typography.family = action.payload;
    },
    setTypographySize: (
      state,
      action: PayloadAction<Partial<EditorFontSizes>>
    ) => {
      state.typography.sizes = {
        ...state.typography.sizes,
        ...action.payload,
      };
    },
  },
});

export const {
  setNav,
  setResume,
  setTab,
  setState,
  setColors,
  setTemplate,
  setTypographyFont,
  setTypographySize,
} = editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
