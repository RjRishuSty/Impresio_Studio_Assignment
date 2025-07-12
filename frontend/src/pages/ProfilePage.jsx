import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Rating,
  Button,
  Container,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoGallery from "../components/PhotoGallery";
import { handleFilterUser } from "../redux/slices/userData.slice";
import Slider from "../components/Slider";
import InquiryModal from "../components/InquiryModal";

const ProfilePage = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.userData.data);
  const user = useSelector((state) => state.userData.filteredUser);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (userData && id) {
      const filterUser = userData.find(
        (item) => Number(item.id) === Number(id)
      );
      dispatch(handleFilterUser(filterUser));
    }
  }, [id, userData, dispatch]);

  const handleOpen = () => setOpenModal(true);

  if (!user) return <Typography> User Not Found</Typography>;

  return (
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
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              {user.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {user.bio}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {user.location}
            </Typography>
            <Typography variant="subtitle1">Price: ₹{user.price}</Typography>

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
  );
};

export default ProfilePage;
