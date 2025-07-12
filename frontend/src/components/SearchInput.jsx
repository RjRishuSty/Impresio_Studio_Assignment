import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter, handleSearch } from "../redux/slices/filterData.slice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const searchText = useSelector((state) => state.filterData.search);
  const isTablet = useMediaQuery("(max-width:900px)");

  const handleSearchFilter = useCallback(() => {
    const query = searchText.trim().toLowerCase();
    const result = userData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.tags?.join(" ").toLowerCase().includes(query)
    );

    dispatch(handleFilter(result));
  }, [searchText, userData, dispatch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleSearchFilter();
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchText]);

  return (
    <Box sx={{ width: "100%", display: "flex", px: isTablet?1:4, mt: 2, mb: 3 }}>
      <TextField
        type="search"
        size={isTablet?"small":'medium'}
        fullWidth
        label="Search by name, tag, or location"
        value={searchText}
        onChange={(e) => dispatch(handleSearch(e.target.value))}
        sx={{ mr: isTablet?1:3 }}
      />
      <Button
        onClick={handleSearchFilter}
        variant="contained"
        size={isTablet?"small":'medium'}
        sx={{ width: isTablet?"auto":"20%", textTransform: "capitalize", fontSize:isTablet?"auto": "1.1rem" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
