import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Rating,
  Button,
  Modal,
  TextField,
  Container,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoGallery from "../components/PhotoGallery";
import { handleFilterUser } from "../redux/slices/userData.slice";
import Slider from "../components/Slider";

const ProfilePage = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.userData.data);
  const user = useSelector((state) => state.userData.filteredUser);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    if (userData && id) {
      const filterUser = userData.find(
        (item) => Number(item.id) === Number(id)
      );
      dispatch(handleFilterUser(filterUser));
      console.log("Filtered User:", filterUser);
    }
  }, [id, userData, dispatch]);

  // const handleOpen = () => setOpenModal(true);
  // const handleClose = () => setOpenModal(false);

  // const handleFormChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = () => {
  //   console.log("Inquiry submitted", formData);
  //   handleClose();
  // };

  if (!user) return <Typography> User Not Found</Typography>;

  return (
    <Box sx={{ mt: 10 }}>
      <Container sx={{ boxShadow: "0px 0px 5px #ccc", p: 5 }}>
        <Grid container rowSpacing={3} columnSpacing={1}>
          <Grid
            size={{ xs: 12, sm: 6, md: 5 }}
            sx={{
              backgroundColor: "primary.main",
              px: 4,
              py: 2,
              color: "#fff",
              borderRadius: 2,
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
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 7 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 4 }}>
              Portfolio Gallery
            </Typography>
            <PhotoGallery data={user.portfolio} />
          </Grid>
        </Grid>
      </Container>

      <Stack sx={{border:'2px solid red',py:5,mt:5}}>
      <Typography>Reviews</Typography>
        <Slider data={user.reviews}/>
      </Stack>

      {/* <Typography variant="h6" sx={{ mt: 4 }}>
        Reviews
      </Typography>
      <Box>
        {photographer.reviews.map((rev, i) => (
          <Box key={i} sx={{ mt: 2, borderBottom: "1px solid #ddd", pb: 1 }}>
            <Typography fontWeight="bold">{rev.name}</Typography>
            <Rating value={rev.rating} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              {rev.date}
            </Typography>
            <Typography>{rev.comment}</Typography>
          </Box>
        ))}
      </Box> */}

      {/* Inquiry Button */}
      {/* <Button variant="contained" sx={{ mt: 4 }} onClick={handleOpen}>
        Send Inquiry
      </Button> */}

      {/* Inquiry Modal */}
      {/* <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            mx: "auto",
            mt: "10%",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6">Send Inquiry</Typography>
          <TextField
            fullWidth
            name="name"
            label="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleFormChange}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default ProfilePage;
