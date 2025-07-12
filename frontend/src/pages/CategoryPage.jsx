import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
import Cards from "../components/Cards";
import SidebarFilter from "../components/SidebarFilter";
import { handleUserData } from "../redux/slices/userData.slice";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.userData.data);
  console.log("in CataPage Slice", userData);

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotographersData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/photographers`);
        console.log("in CataPage", response.data);
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

        <Grid size={{ xs: 12, sm: 8, md: 9 }} sx={{ height: "100vh",}}>
          {loading ? (
            <CircularProgress />
          ) : userData.length === 0 ? (
            <Typography>No photographers found.</Typography>
          ) : (
            <>
              <SearchInput />
              <Grid container spacing={2} sx={{ p: 1 }}>
                {userData.map((item) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                    <Cards data={item} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CategoryPage;
