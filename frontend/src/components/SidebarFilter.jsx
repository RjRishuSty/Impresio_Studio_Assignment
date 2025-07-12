import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Rating,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownInputs from "./DropDownInputs";
import {
  handleFilter,
  handlePriceRange,
  handleRating,
  handleStyles,
  resetFilter,
} from "../redux/slices/filterData.slice";

//* Create for styles..............
const stylesList = ["Traditional", "Candid", "Studio", "Outdoor"];

const SidebarFilter = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const {data, price, rating, styles,isActive, search} = useSelector((state) => state.filterData);

  useEffect(() => {
  let result = [...userData];

  const hasPriceChanged = price[0] !== 0 || price[1] !== 20000;
  const hasRating = rating > 0;
  const hasStyles = styles.length > 0;

  if (hasPriceChanged || hasRating || hasStyles) {
    // apply filters
    if (hasPriceChanged) {
      result = result.filter(
        (item) => item.price >= price[0] && item.price <= price[1]
      );
    }

    if (hasRating) {
      result = result.filter((item) => item.rating >= rating);
    }

    if (hasStyles) {
      result = result.filter((item) =>
        styles.every((s) => item.styles.includes(s))
      );
    }

    dispatch(handleFilter(result));
  } 
}, [price, rating, styles, userData, dispatch]);

console.log(data,"result")
  //* This handle work only styles change .................
  const handleStyleChange = (style, checked) => {
    const updatedStyles = checked
      ? [...styles, style]
      : styles.filter((s) => s !== style);

    dispatch(handleStyles(updatedStyles));
  };


  return (
    <>
    {isActive && !isMobile &&!search  && (
          <Button fullWidth variant="contained" sx={{mt:3}} onClick={() => dispatch(resetFilter())}>Clear Filter</Button>
        )}
      <Box sx={{ mt: 3, mb: 1 }}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={price}
          onChange={(e, newVal) => dispatch(handlePriceRange(newVal))}
          valueLabelDisplay="auto"
          min={0}
          max={20000}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Minimum Rating</Typography>
        <Rating
          precision={0.5}
          value={rating}
          onChange={(e, val) => dispatch(handleRating(val || 0))}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Styles</Typography>
        <FormGroup>
          {stylesList.map((style) => (
            <FormControlLabel
              key={style}
              control={
                <Checkbox
                  checked={styles.includes(style)}
                  onChange={(e) => handleStyleChange(style, e.target.checked)}
                />
              }
              label={style}
            />
          ))}
        </FormGroup>
      </Box>

      <DropDownInputs />
        
    </>
  );
};

export default SidebarFilter;
