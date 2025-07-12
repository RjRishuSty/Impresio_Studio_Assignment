import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive:false,
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
      state.isActive = true;
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
      const hasFilterResult = action.payload.length > 0;
      const isAnyFilterApplied =
        state.search !== "" ||
        state.rating > 0 ||
        state.price[0] !== 0 ||
        state.price[1] !== 20000 ||
        state.styles.length > 0 ||
        state.city !== "" ||
        state.sortBy !== "";

      state.isActive = isAnyFilterApplied && hasFilterResult;
    },
    resetFilter: (state) => {
      state.isActive = false;
      state.search = "";
      state.price = [0, 20000];
      state.rating = 0;
      state.city = "";
      state.styles = [];
      state.sortBy = "";
      state.data = [];
    }
  },
});

export const {resetFilter, handleSearch, handleFilter,handleCity,handlePriceRange,handleRating,handleStyles,handleSort } = filterDataSlice.actions;
export default filterDataSlice.reducer;
