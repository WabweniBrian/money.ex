import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/uiSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
});
