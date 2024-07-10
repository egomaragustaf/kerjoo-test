import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { postApi } from "./postApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>; // { counter: { counter: number; }; }

export type AppDispatch = typeof store.dispatch; // (action: { type: string; payload?: any; }) => any
