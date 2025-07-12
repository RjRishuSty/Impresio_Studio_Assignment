import React, { useEffect, useState } from "react";
import { Grid, Typography, Stack, useMediaQuery, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import axios from "axios";
import Cards from "../components/Cards";
import SidebarFilter from "../components/SidebarFilter";
import { handleUserData } from "../redux/slices/userData.slice";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";
import SkeletonLoader from "../components/SkeletonLoader";
import MobileFilter from "../components/Mobilefilter";
import { handleGetHeading } from "../redux/slices/filterData.slice";

const CategoryPage = () => {
  //* All states...............
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  const userData = useSelector((state) => state.userData.data);
  const { data, isActive, heading } = useSelector((state) => state.filterData);
  const isFiltered = isActive;
  const displayData = isFiltered ? data : userData;
  const showNotFound = isFiltered && data.length === 0 && !loading;

  //*Style...
  const isMinLaptop = useMediaQuery("(max-width:1339px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  //* Fecth Photographer User data ................
  useEffect(() => {
    const fetchPhotographersData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixisphere-api-b4dq.onrender.com/photographers`
        );
        dispatch(handleUserData(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotographersData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const first = data[0];
      dispatch(
        handleGetHeading({ name: first.name, location: first.location })
      );
    }
  }, [data, dispatch]);

  return (
    <>
      <Stack component="section">
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, sm: 3, md: isMinLaptop ? 2 : 3 }}
            sx={{
              p: 2,
              minHeight: "100vh",
              boxShadow: "5px 0px 5px -2px rgba(0,0,0,0.2)",
              display: { xs: "none", sm: "block" },
            }}
          >
            <SidebarFilter />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 9, md: isMinLaptop ? 10 : 9 }}
            sx={{ minHeight: "100vh" }}
          >
            <SearchInput />
            {isActive && data.length > 0 && (
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: "bold", mt: 2, mb: 1 }}
              >
                {heading}
              </Typography>
            )}
            {isMobile && <MobileFilter />}
            {loading ? (
              <SkeletonLoader useIn="category" />
            ) : showNotFound ? (
              <Stack alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
                <SearchOffIcon color="disabled" sx={{ fontSize: 50 }} />
                <Typography variant="h6" color="text.secondary" mt={2}>
                  No photographers found.
                </Typography>
              </Stack>
            ) : (
              <Grid container spacing={2} sx={{ p: 1 }}>
                {displayData.slice(0, visibleCount).map((item) => (
                  <Grid size={{ xs: 12, sm: 12, md: 4 }} key={item.id}>
                    <Cards data={item} />
                  </Grid>
                ))}
                <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  {displayData.length >= visibleCount && (
                    <Stack alignItems="center" mt={2}>
                      <Button
                        variant="outlined"
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                      >
                        Load More
                      </Button>
                    </Stack>
                  )}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default CategoryPage;
