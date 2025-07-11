import React, { useState } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <TextField
      fullWidth
      label="Search by name, tag, or location"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchInput;
