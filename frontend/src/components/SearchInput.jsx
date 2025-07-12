import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Box
      sx={{  width: "100%", display: "flex", px: 4,mt:2,mb:3 }}
    >
      <TextField
        type="search"
        fullWidth
        label="Search by name, tag, or location"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{mr:3}}
      />
      <Button variant="contained" size="medium" sx={{width:'20%',textTransform:'capitalize',fontSize:'1.1rem'}}>
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
