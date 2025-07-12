import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
      <CameraAltIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          color: "inherit",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Pixisphere
      </Typography>
    </Box>
  );
};

export default Logo;
