import { configureStore } from "@reduxjs/toolkit";
import { socialMediaApi } from "../service/socialMediaApi";

export const store = configureStore({
  reducer: {
    [socialMediaApi.reducerPath]: socialMediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialMediaApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
