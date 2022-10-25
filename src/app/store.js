import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
