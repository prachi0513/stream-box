import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/appSlice";
import serachReducer from "../Redux/searchSlice";
import chatReducer from "../Redux/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: serachReducer,
    chat: chatReducer,
  },
});

export default appStore;
