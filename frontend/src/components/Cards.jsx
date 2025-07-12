import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../assets/ravi.jpg";
import img2 from "../assets/clickfactory.jpg";
import img3 from "../assets/lensqueen.jpg";
import img4 from "../assets/neha.jpg";
import img5 from "../assets/snapshot.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const img = data.profilePic.includes("/images/ravi.jpg")
    ? img1
    : data.profilePic.includes("/images/neha.jpg")
    ? img4
    : data.profilePic.includes("/images/snapshot.jpg")
    ? img5
    : data.profilePic.includes("/images/lensqueen.jpg")
    ? img3
    : data.profilePic.includes("/images/clickfactory.jpg")
    ? img2
    : data.profilePic;
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Avatar src={img} alt={data.name} sx={{ width: 100, height: 100 }} />
        <Box sx={{ ml: 3 }}>
          <Typography variant="h6">
            {data.name.length > 15 ? data.name.slice(0, 15) : data.name}
          </Typography>
          <Rating value={data.rating} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary">
            {data.location}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Starting Price: ₹{data.price}
        </Typography>

        {data.tags.map((item) => (
          <Chip
            variant="body2"
            label={item}
            sx={{ mr: 1, fontWeight: "bold" }}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          size="medium"
          onClick={() => navigate(`/profile/${data.id}`)}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
