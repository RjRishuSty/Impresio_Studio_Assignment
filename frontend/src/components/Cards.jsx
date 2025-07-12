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
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const isMinLaptop = useMediaQuery("(max-width:1339px)");
  const isTablet = useMediaQuery("(max-width:900px)");
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
        <Avatar
          src={data.profilePic}
          alt={data.name}
          sx={{
            width: isMinLaptop ? 80 : 100,
            height: isMinLaptop ? 80 : 100,
          }}
        />
        <Box sx={{ ml: 3 }}>
          <Typography variant={isMinLaptop ? "button" : "h6"}>
            {isTablet?data.name: data.name.length > 11 ? data.name.slice(0, 11) : data.name}
          </Typography>
          {isMinLaptop && <br />}
          <Rating
            value={data.rating}
            precision={0.1}
            readOnly
            size={isMinLaptop ? "small" : "medium"}
          />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {data.location}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ mt: 1 }}>
        <Typography
          variant="body2"
          sx={{ mb: 1, }}
        >
          Starting Price: ₹{data.price}
        </Typography>

        <Box sx={{width:'100%',display:'flex',justifyContent:'start',alignItems:'center'}}>
          {data.tags.map((item, index) => (
          <Chip
            key={index}
            variant={isMinLaptop ? "" : "body2"}
            label={item}
            sx={{
              fontSize: isMinLaptop && "0.8rem",
              mr: isTablet?1: isMinLaptop ? 0 : 1,
              fontWeight: isMinLaptop ? "normal" : "bold",
            }}
          />
        ))}
        </Box>
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
