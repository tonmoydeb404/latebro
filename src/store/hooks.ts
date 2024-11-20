import { useDispatch, useSelector, useStore } from "react-redux";
import { selectAuth } from "./features/auth/slice";
import { selectEditor } from "./features/editor/slice";
import type { AppDispatch, AppStore, RootState } from "./index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

// ----------------------------------------------------------------------

export const useEditor = () => useAppSelector(selectEditor);
export const useAuth = () => useAppSelector(selectAuth);
