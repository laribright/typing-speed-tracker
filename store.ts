import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from "./redux/features/challenge/challengeSlice";

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
