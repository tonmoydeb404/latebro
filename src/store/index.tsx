import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/api";
import authSlice from "./features/auth/slice";
import editorSlice from "./features/editor/slice";
import resumeEducationApi from "./features/resume/education/api";
import resumeExperienceApi from "./features/resume/experience/api";
import resumeProjectApi from "./features/resume/project/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [editorSlice.name]: editorSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [resumeEducationApi.reducerPath]: resumeEducationApi.reducer,
      [resumeExperienceApi.reducerPath]: resumeExperienceApi.reducer,
      [resumeProjectApi.reducerPath]: resumeProjectApi.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(
        authApi.middleware,
        resumeEducationApi.middleware,
        resumeExperienceApi.middleware,
        resumeProjectApi.middleware
      );
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
