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
  theme: null,
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
    setTheme: (state, action: PayloadAction<EditorSlice["theme"]>) => {
      state.theme = action.payload;
    },
  },
});

export const { setNav, setResume, setTab, setState, setTheme } =
  editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
