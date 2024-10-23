import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT_THRESHOLD } from "../utils/constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    showLiveChat: true,
  },
  reducers: {
    addComments: (state, action) => {
      state.messages.splice(LIVE_COUNT_THRESHOLD, 1);
      state.messages.unshift(action.payload);
    },
    toggleLiveChat: (state) => {
      state.showLiveChat = !state.showLiveChat;
    },
  },
});

export const { addComments, toggleLiveChat } = chatSlice.actions;

export default chatSlice.reducer;
