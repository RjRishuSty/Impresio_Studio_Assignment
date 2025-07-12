import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCity, handleFilter, handleSort } from "../redux/slices/filterData.slice";

const DropDownInputs = () => {
  const userData = useSelector((state) => state.userData.data);
  const selectedCity = useSelector((state) => state.filterData.city);
  const sortBy = useSelector((state) => state.filterData.sortBy);
  const dispatch = useDispatch();

  useEffect(() => {
    let result = [...userData];
    //! City.........
    if (selectedCity) {
      result = result.filter((item) => item.location === selectedCity);
    }

    if (sortBy === "priceAsc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "ratingDesc") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "recent") result.sort((a, b) => b.id - a.id);
    dispatch(handleFilter(result));
  }, [selectedCity,sortBy]);
  
  //* This is for citys option..........
  const cities = useMemo(
    () => [...new Set(userData.map((item) => item.location))],
    [userData]
  );
  //* Create dropdown fields ...........
  const fields = [
    {
      label: "Filter By City",
      id: "city",
      value: selectedCity,
      onChange: (val) => dispatch(handleCity(val)),
      options: cities.map((city) => ({
        value: city,
        label: city,
      })),
    },
    {
      label: "Filter By Price/Rating",
      id: "sortBy",
      value: sortBy,
      onChange: (val) => dispatch(handleSort(val)),
      options: [
        { value: "priceAsc", label: "Price: Low to High" },
        { value: "ratingDesc", label: "Rating: High to Low" },
        { value: "recent", label: "Recently Added" },
      ],
    },
  ];
  return (
    <Grid container sx={{ mt: 2 }}>
      {fields.map((item, index) => (
        <Grid size={{ xs: 12, sm: 12, md: 12 }} key={index}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>{item.label}</InputLabel>
            <Select
              value={item.value}
              onChange={(e) => item.onChange(e.target.value)}
            >
              {item.options.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.value}
                  sx={{ textTransform: "capitalize" }}
                >
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
