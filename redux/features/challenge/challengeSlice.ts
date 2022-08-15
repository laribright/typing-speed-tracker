import { createSlice } from "@reduxjs/toolkit";

interface ChallengeState {
  started: boolean;
}

const initialState: ChallengeState = {
  started: false,
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    startChallenge: (state) => {
      state.started = true;
    },
    stopChallenge: (state) => {
      state.started = false;
    },
  },
});

export const { startChallenge, stopChallenge } = challengeSlice.actions;

export default challengeSlice.reducer;
