import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Rating,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoGallery from "../components/PhotoGallery";
import { handleFilterUser } from "../redux/slices/userData.slice";
import Slider from "../components/Slider";
import InquiryModal from "../components/InquiryModal";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";

const ProfilePage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.userData.filteredUser);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixisphere-api-b4dq.onrender.com/photographers?id=${id}`
        );
        console.log(response.data);
        dispatch(handleFilterUser(response.data[0]));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);
  console.log(user,"ac")

  const handleOpen = () => setOpenModal(true);

  return (
    <>
      {loading ? (
        ""
      ) : user === null ? (
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
          <PersonIcon color="disabled" sx={{ fontSize: 50 }} />
          <Typography variant="h6" color="text.secondary" mt={2}>
             Oops, Photographer details not found.
          </Typography>
        </Stack>
      ) : (
        <Box component="section" sx={{ mt: 5 }}>
          <Container sx={{ py: 5 }}>
            <Grid container rowSpacing={3} columnSpacing={1}>
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  pl: 2,
                  pr: 2,
                  borderRight: "2px solid #ccc",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {user.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {user.bio}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Location: {user.location}
                </Typography>
                <Typography variant="subtitle1">
                  Price: ₹{user.price}
                </Typography>

                <Typography variant="subtitle1">
                  Styles: {user.styles.join(", ")}
                </Typography>
                <Typography variant="subtitle1">
                  Tags: {user.tags.join(", ")}
                </Typography>

                <Rating
                  value={user.rating}
                  precision={0.1}
                  readOnly
                  sx={{ mt: 1 }}
                />
                <Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={handleOpen}
                  >
                    Send Inquiry
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 8 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhotoGallery data={user.portfolio} />
              </Grid>
            </Grid>
          </Container>

          <Box sx={{ backgroundColor: "#f2f2f2", py: 5, mt: 7 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
            >
              What Our Clients Say
            </Typography>
            <Container maxWidth="sm">
              <Slider data={user.reviews} />
            </Container>
          </Box>
          <InquiryModal openModal={openModal} setOpenModal={setOpenModal} />
        </Box>
      )}
    </>
  );
};

export default ProfilePage;
