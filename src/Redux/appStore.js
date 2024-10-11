import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/appSlice";
import serachReducer from "../Redux/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: serachReducer,
  },
});

export default appStore;
