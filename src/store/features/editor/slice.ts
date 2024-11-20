import { RootState } from "@/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface EditorState {
  nav: number;
}

const initialState: EditorState = {
  nav: 0,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setNav: (state, action: PayloadAction<number>) => {
      state.nav = action.payload;
    },
  },
});

export const { setNav } = editorSlice.actions;
export const selectEditor = (state: RootState) => state.editor;
export default editorSlice;
