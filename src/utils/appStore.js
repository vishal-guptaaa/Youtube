import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cardSlice from "./cardSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    card: cardSlice,
  },
});

export default appStore;
