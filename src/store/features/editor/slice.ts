import { RootState } from "@/store";
import { Resume } from "@/types/resume";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface EditorState {
  nav: number;
  resume: Resume | null;
  tab: number;
}

const initialState: EditorState = {
  nav: 0,
  tab: 0,
  resume: null,
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
    setResume: (state, action: PayloadAction<Resume | null>) => {
      state.resume = action.payload;
    },
  },
});

export const { setNav, setResume, setTab } = editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
