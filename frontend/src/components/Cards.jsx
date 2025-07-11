import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: "100%", border: "2px solid blue" }}>
      <Box component="img" src={data.profilePic} alt={data.name} />
      <CardContent>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {data.location}
        </Typography>
        <Typography variant="body2">₹ {data.price} onwards</Typography>
        <Rating value={data.rating} precision={0.1} readOnly />
        <Typography variant="caption">{data.tags.join(", ")}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          size="small"
          sx={{ mt: 1 }}
          onClick={() => navigate(`/profile/${data.id}`)}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
