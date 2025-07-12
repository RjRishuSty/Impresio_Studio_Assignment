import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Rating,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownInputs from "./DropDownInputs";
import {
  handleFilter,
  handlePriceRange,
  handleRating,
  handleStyles,
} from "../redux/slices/filterData.slice";

//* Create for styles..............
const stylesList = ["Traditional", "Candid", "Studio", "Outdoor"];
const SidebarFilter = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const { price, rating, styles } = useSelector((state) => state.filterData);

  useEffect(() => {
    let result = [...userData];
    //! Filter Price Range .........
    result = result.filter(
      (item) => item.price >= price[0] && item.price <= price[1]
    );

    //! Rating Filter..............
    result = result.filter((item) => item.rating >= rating);

    //! Styles Filter .............
    if (styles.length > 0) {
      result = result.filter((item) =>
        styles.every((s) => item.styles.includes(s))
      );
    }

     dispatch(handleFilter(result));
  }, [price,rating,styles,userData,dispatch]);

  //* This handle work only styles change .................
  const handleStyleChange = (style, checked) => {
    const updatedStyles = checked
      ? [...styles, style]
      : styles.filter((s) => s !== style);

    dispatch(handleStyles(updatedStyles));
  };

  return (
    <>
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
