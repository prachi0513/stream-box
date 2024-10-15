import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT_THRESHOLD } from "../utils/constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addComments: (state, action) => {
      state.messages.splice(LIVE_COUNT_THRESHOLD, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addComments } = chatSlice.actions;

export default chatSlice.reducer;
