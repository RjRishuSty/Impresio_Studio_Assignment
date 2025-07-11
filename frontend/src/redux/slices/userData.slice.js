import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], //* Store photographer user data
  filtered: [],
};

const photographerSlice = createSlice({
  name: "photographers",
  initialState,
  reducers: {
    handleUserData: (state, action) => {
      state.data = action.payload;
    },
    handleFilter: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const { handleFilter,handleUserData } = photographerSlice.actions;
export default photographerSlice.reducer;
