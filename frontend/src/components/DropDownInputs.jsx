import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const DropDownInputs = () => {
  const userData = useSelector((state) => state.userData.data);
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("");
  const cities = useMemo(
    () => [...new Set(userData.map((item) => item.location))],
    [userData]
  );
  const fields = [
    {
      label: "Filter By City",
      id: "city",
      value: selectedCity,
      options: cities.map((city) => ({ value: city.toLowerCase(), label: city})),
    },
    {
      label: "Filter By Price/Rating",
      id: "sortBy",
      value: sortBy,
      // onChange: (e) => setSortBy(e.target.value),
      options: [
        { value: "priceAsc", label: "Price: Low to High" },
        { value: "ratingDesc", label: "Rating: High to Low" },
        { value: "recAdd", label: "Recently Added" },
      ],
    },
  ];
  return (
    <Grid container sx={{mt:4}}>
      {fields.map((item, index) => (
        <Grid size={{ xs: 12, sm: 12, md: 12 }} key={index}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>{item.label}</InputLabel>
            <Select
             value={item.value}
              onChange={(e) => item.id==='city'?setSelectedCity(e.target.value):setSortBy(e.target.value)}
            // label="City"
            >
              {item.options.map((item, index) => (
                <MenuItem key={index} value={item.value ? item.value : item} sx={{textTransform:'capitalize'}}>
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
