import {
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Rating,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DropDownInputs from "./DropDownInputs";

const stylesList = ["Candid", "Traditional", "Studio", "Outdoor"];
const SidebarFilter = () => {
     const userData = useSelector((state)=>state.userData.data);
  const [filtered, setFiltered] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    let result = [...userData];

    // Search
    // if (searchTerm.trim()) {
    //   const term = searchTerm.toLowerCase();
    //   result = result.filter(
    //     (p) =>
    //       p.name.toLowerCase().includes(term) ||
    //       p.location.toLowerCase().includes(term) ||
    //       p.tags.join(" ").toLowerCase().includes(term)
    //   );
    // }

    // City
    if (selectedCity) {
      result = result.filter((p) => p.location === selectedCity);
    }

    // Styles
    if (selectedStyles.length) {
      result = result.filter((p) =>
        selectedStyles.every((style) => p.styles.includes(style))
      );
    }

    // Rating
    result = result.filter((p) => p.rating >= minRating);

    // Price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    if (sort === "priceAsc") result.sort((a, b) => a.price - b.price);
    if (sort === "ratingDesc") result.sort((a, b) => b.rating - a.rating);
    if (sort === "recent") result.sort((a, b) => b.id - a.id);

    setFiltered(result);
  }, [
    selectedCity,
    selectedStyles,
    minRating,
    priceRange,
    sort,
  ]);

  const cities = useMemo(
    () => [...new Set(userData.map((p) => p.location))],
    [userData]
  );

  return (
    <Grid
      size={{ xs: 12, sm: 4, md: 3 }}
      sx={{ p: 2, border: "3px solid blue"}}
    >
    <Typography variant="h4">Filter Section</Typography>
      {/* dropdown */}
      <DropDownInputs/>

      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Styles</Typography>
        <FormGroup>
          {stylesList.map((style) => (
            <FormControlLabel
              key={style}
              control={
                <Checkbox
                  checked={selectedStyles.includes(style)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedStyles([...selectedStyles, style]);
                    } else {
                      setSelectedStyles(
                        selectedStyles.filter((s) => s !== style)
                      );
                    }
                  }}
                />
              }
              label={style}
            />
          ))}
        </FormGroup>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Minimum Rating</Typography>
        <Rating
          precision={0.5}
          value={minRating}
          onChange={(e, val) => setMinRating(val || 0)}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={(e, newVal) => setPriceRange(newVal)}
          valueLabelDisplay="auto"
          min={0}
          max={20000}
        />
      </Box>

      
    </Grid>
  );
};

export default SidebarFilter;
