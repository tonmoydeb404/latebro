import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/api";
import authSlice from "./features/auth/slice";
import editorSlice from "./features/editor/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [editorSlice.name]: editorSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(authApi.middleware);
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
