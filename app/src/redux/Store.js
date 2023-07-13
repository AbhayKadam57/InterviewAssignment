import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice";

export const Store = configureStore({
  reducer: {
    user: Userslice,
  },
});
