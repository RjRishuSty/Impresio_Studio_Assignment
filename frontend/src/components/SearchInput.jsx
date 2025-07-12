import { Box, Button, TextField } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter, handleSearch } from "../redux/slices/filterData.slice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const searchText = useSelector((state) => state.filterData.search);

  const handleSearchFilter = useCallback(() => {
    const query = searchText.toLowerCase();
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
    <Box sx={{ width: "100%", display: "flex", px: 4, mt: 2, mb: 3 }}>
      <TextField
        type="search"
        fullWidth
        label="Search by name, tag, or location"
        value={searchText}
        onChange={(e) => dispatch(handleSearch(e.target.value))}
        sx={{ mr: 3 }}
      />
      <Button
        onClick={handleSearchFilter}
        variant="contained"
        size="medium"
        sx={{ width: "20%", textTransform: "capitalize", fontSize: "1.1rem" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
