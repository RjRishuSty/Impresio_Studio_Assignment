import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotographersData = createAsyncThunk(
  "photographers/fetchPhotographers",
  async () => {
   try {
     const response = await axios.get(`http://localhost:3001/photographers`);
    return response.data;
   } catch (error) {
    throw error;
   }
  }
);
console.log(fetchPhotographersData,"slice")
const photographerSlice = createSlice({
  name: "photographers",
  initialState: {
    data: [],  //* Store photographer user data 
    filtered: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotographersData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchPhotographersData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFiltered } = photographerSlice.actions;
export default photographerSlice.reducer;
