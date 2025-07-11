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
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/photographers/${id}`)
      .then((res) => setPhotographer(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Inquiry submitted", formData);
    handleClose();
  };

  if (!photographer) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {photographer.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {photographer.location}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {photographer.bio}
      </Typography>

      <Typography variant="subtitle1">Styles: {photographer.styles.join(", ")}</Typography>
      <Typography variant="subtitle1">Tags: {photographer.tags.join(", ")}</Typography>
      <Typography variant="subtitle1">Price: ₹{photographer.price}</Typography>

      <Rating value={photographer.rating} precision={0.1} readOnly sx={{ mt: 1 }} />

      {/* Gallery */}
      <Typography variant="h6" sx={{ mt: 4 }}>
        Portfolio
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {photographer.portfolio.map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={img}
                alt={`portfolio-${i}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Reviews */}
      <Typography variant="h6" sx={{ mt: 4 }}>
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
      </Box>

      {/* Inquiry Button */}
      <Button variant="contained" sx={{ mt: 4 }} onClick={handleOpen}>
        Send Inquiry
      </Button>

      {/* Inquiry Modal */}
      <Modal open={openModal} onClose={handleClose}>
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
      </Modal>
    </Box>
  );
};

export default ProfilePage;
