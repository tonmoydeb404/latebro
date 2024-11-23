import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/api";
import authSlice from "./features/auth/slice";
import editorSlice from "./features/editor/slice";
import resumeContactApi from "./features/resume/contact/api";
import resumeEducationApi from "./features/resume/education/api";
import resumeExperienceApi from "./features/resume/experience/api";
import resumeLanguageApi from "./features/resume/language/api";
import resumeProfileApi from "./features/resume/profile/api";
import resumeProjectApi from "./features/resume/project/api";
import resumeSkillApi from "./features/resume/skill/api";
import resumeSocialApi from "./features/resume/social/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [editorSlice.name]: editorSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [resumeEducationApi.reducerPath]: resumeEducationApi.reducer,
      [resumeExperienceApi.reducerPath]: resumeExperienceApi.reducer,
      [resumeProjectApi.reducerPath]: resumeProjectApi.reducer,
      [resumeSkillApi.reducerPath]: resumeSkillApi.reducer,
      [resumeLanguageApi.reducerPath]: resumeLanguageApi.reducer,
      [resumeSocialApi.reducerPath]: resumeSocialApi.reducer,
      [resumeProfileApi.reducerPath]: resumeProfileApi.reducer,
      [resumeContactApi.reducerPath]: resumeContactApi.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(
        authApi.middleware,
        resumeEducationApi.middleware,
        resumeExperienceApi.middleware,
        resumeProjectApi.middleware,
        resumeSkillApi.middleware,
        resumeLanguageApi.middleware,
        resumeSocialApi.middleware,
        resumeProfileApi.middleware,
        resumeContactApi.middleware
      );
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
