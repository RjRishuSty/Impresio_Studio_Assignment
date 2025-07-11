import { configureStore } from "@reduxjs/toolkit";
import photographerSlice from "./slices/Photographer.slice";

const store = configureStore({
  reducer: {
    photographer: photographerSlice,
  },
});

export default store;
