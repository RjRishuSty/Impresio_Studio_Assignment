import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Header = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        {/* Logo & Title */}
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

        {/* Navigation Menu */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/profile/1">
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
