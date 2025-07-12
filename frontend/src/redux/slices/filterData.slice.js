import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "", //* search text
  price: [0,20000],
  rating: 0,
  city: "",
  styles: [],
  sortBy: "",
  data: [], //* filter data
};

const filterDataSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
    handlePriceRange: (state, action) => {
      state.price = action.payload;
    },
    handleRating: (state, action) => {
      state.rating = action.payload;
    },
    handleCity: (state, action) => {
      state.city = action.payload;
    },
    handleStyles: (state, action) => {
      state.styles = action.payload;
    },
    handleSort: (state, action) => {
      state.sortBy = action.payload;
    },

    handleFilter: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { handleSearch, handleFilter,handleCity,handlePriceRange,handleRating,handleStyles,handleSort } = filterDataSlice.actions;
export default filterDataSlice.reducer;
