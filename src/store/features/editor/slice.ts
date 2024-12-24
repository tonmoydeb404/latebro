import { RootState } from "@/store";
import { EditorSlice } from "@/types/editor";
import { Resume } from "@/types/resume";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: EditorSlice = {
  nav: 0,
  tab: 0,
  resume: null,
  state: "LOADING",
  colors: null,
  template: null,
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
    setColors: (state, action: PayloadAction<EditorSlice["colors"]>) => {
      state.colors = action.payload;
    },
    setTemplate: (state, action: PayloadAction<EditorSlice["template"]>) => {
      state.template = action.payload;
    },
  },
});

export const { setNav, setResume, setTab, setState, setColors, setTemplate } =
  editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
