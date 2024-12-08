import { RootState } from "@/store";
import { Resume } from "@/types/resume";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface EditorState {
  nav: number;
  resume: Resume | null;
  tab: number;
  state: "LOADING" | "LOADED" | "IDLE" | "NAVIGATING" | "ERROR";
}

const initialState: EditorState = {
  nav: 0,
  tab: 0,
  resume: null,
  state: "LOADING",
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
    setState: (state, action: PayloadAction<EditorState["state"]>) => {
      state.state = action.payload;
    },
    setResume: (state, action: PayloadAction<Resume | null>) => {
      state.resume = action.payload;
    },
  },
});

export const { setNav, setResume, setTab, setState } = editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
