import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Rating,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const stylesList = ["Candid", "Traditional", "Studio", "Outdoor"];

const CategoryPage = () => {
  const [photographerData, setPhotographerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sort, setSort] = useState("");

  const navigate = useNavigate();
  const photographerUserData = useSelector((state) => state.photographer.data);
  console.log(photographerUserData);

  useEffect(() => {
    const fetchPhotographersData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/photographers`);
        console.log("in CataPage", response.data);
        setPhotographerData(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };

    fetchPhotographersData();
  }, []);

  useEffect(() => {
    let result = [...photographerData];

    // Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.tags.join(" ").toLowerCase().includes(term)
      );
    }

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
    searchTerm,
    selectedCity,
    selectedStyles,
    minRating,
    priceRange,
    sort,
    photographerData,
  ]);

  const cities = useMemo(
    () => [...new Set(photographerData.map((p) => p.location))],
    [photographerData]
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        📸 Maternity Photographers in Bengaluru
      </Typography>

      {/* Search & Filters */}
      <Grid container spacing={2} sx={{ my: 2 }}>
        {/* Left Filters */}
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Search by name, tag, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>City</InputLabel>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              label="City"
            >
              <MenuItem value="">All</MenuItem>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Sort By</InputLabel>
            <Select value={sort} onChange={(e) => setSort(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="priceAsc">Price: Low to High</MenuItem>
              <MenuItem value="ratingDesc">Rating: High to Low</MenuItem>
              <MenuItem value="recent">Recently Added</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Photographer Cards */}
        <Grid item xs={12} md={9}>
          {loading ? (
            <CircularProgress />
          ) : photographerData.length === 0 ? (
            <Typography>No photographers found.</Typography>
          ) : (
            <Grid container spacing={2}>
              {photographerData.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={item.id}
                  sx={{ border: "2px solid red" }}
                >
                  <Cards data={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryPage;
