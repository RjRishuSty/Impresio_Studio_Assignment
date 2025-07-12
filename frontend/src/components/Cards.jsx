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
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
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
        <Avatar src={data.profilePic} alt={data.name} sx={{ width: 100, height: 100 }} />
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

        {data.tags.map((item,index) => (
          <Chip
          key={index}
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
