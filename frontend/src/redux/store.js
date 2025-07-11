import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userData.slice";
import filterDataSlice from "./slices/filterData.slice";

const store = configureStore({
  reducer: {
    userData: userDataSlice,
    filterData: filterDataSlice,
  },
});

export default store;
