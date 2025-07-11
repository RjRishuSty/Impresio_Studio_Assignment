import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const fields = [
  { label: "City", id: "city", option: ["abc"] },
  {
    label: "filter By",
    id: "sortBy",
    option: [
      { value: "priceAsc", label: "Price: Low to High" },
      { value: "ratingDesc", label: "Rating: High to Low" },
    ],
  },
];
const DropDownInputs = () => {
  return (
    <Grid container>
      {fields.map((item, index) => (
        <Grid size={{ xs: 12, sm: 12, md: 12 }} key={index}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>{item.label}</InputLabel>
            <Select
              // value={item.value?item.value|| option}
              //   onChange={(e) => setSelectedCity(e.target.value)}
              label="City"
            >
              <MenuItem value="">All</MenuItem>
              {item.option.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default DropDownInputs;
