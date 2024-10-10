import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/appSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;
