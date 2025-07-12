import React, { useEffect, useState } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import axios from "axios";
import Cards from "../components/Cards";
import SidebarFilter from "../components/SidebarFilter";
import { handleUserData } from "../redux/slices/userData.slice";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";
import SkeletonLoader from "../components/SkeletonLoader";

const CategoryPage = () => {

  //* All states...............
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.userData.data);
  const filterData = useSelector((state) => state.filterData.data);
  const displayData = filterData.length > 0 ? filterData : userData;

  //* Fecth Photographer User data ................
  useEffect(() => {
    const fetchPhotographersData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://pixisphere-api-b4dq.onrender.com/photographers`);
        dispatch(handleUserData(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotographersData();
  }, []);

  return (
    <Stack component="section">
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 4, md: 3 }}
          sx={{
            p: 2,
            height: "100vh",
            boxShadow: "5px 0px 5px -2px rgba(0,0,0,0.2)",
          }}
        >
          <SidebarFilter />
        </Grid>

        <Grid size={{ xs: 12, sm: 8, md: 9 }} sx={{ height: "100vh" }}>
          <SearchInput />
          {loading ? (
            <SkeletonLoader/>
          ) : displayData.length === 0 ? (
            <Stack alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
              <SearchOffIcon color="disabled" sx={{ fontSize: 50 }} />
              <Typography variant="h6" color="text.secondary" mt={2}>
                No photographers found.
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={2} sx={{ p: 1 }}>
              {displayData.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                  <Cards data={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CategoryPage;
