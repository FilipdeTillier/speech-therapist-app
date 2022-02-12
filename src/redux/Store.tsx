import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courseslist";

export const store = configureStore({
  reducer: {
    courseslist: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
