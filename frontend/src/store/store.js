import { configureStore } from "@reduxjs/toolkit";
import userSlilce from "./userSlice";
const store = configureStore({
  reducer: {
    user: userSlilce,
  },
});
export default store;
