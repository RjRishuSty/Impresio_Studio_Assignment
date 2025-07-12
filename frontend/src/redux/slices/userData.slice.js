import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], //* Store photographer user data
  filteredUser: null,
};

const photographerSlice = createSlice({
  name: "photographers",
  initialState,
  reducers: {
    handleUserData: (state, action) => {
      state.data = action.payload;
    },
    handleFilterUser: (state, action) => {
      state.filteredUser = action.payload;
    },
  },
});

export const { handleFilterUser, handleUserData } = photographerSlice.actions;
export default photographerSlice.reducer;
