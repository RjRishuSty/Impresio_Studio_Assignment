import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
import Cards from "../components/Cards";
import SidebarFilter from "../components/SidebarFilter";
import { handleUserData } from "../redux/slices/userData.slice";
import {useDispatch, useSelector} from 'react-redux';

const CategoryPage = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state)=>state.userData.data);
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
    <Stack component="section" sx={{ border: "2px solid red",minHeight:'90vh' }}>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <SidebarFilter />
        <Grid size={{ xs: 12, sm: 8, md: 9 }} sx={{ border: "2px solid black",minHeight:'100%' }}>
          {loading ? (
            <CircularProgress />
          ) : userData.length === 0 ? (
            <Typography>No photographers found.</Typography>
          ) : (
            <Grid container spacing={2}>
              {userData.map((item) => (
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
