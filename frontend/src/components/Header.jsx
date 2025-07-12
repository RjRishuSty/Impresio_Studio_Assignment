import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];
const Header = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark sx={{boxShadow:'none'}}>
      <Toolbar>
        <Logo />
        <Box>
          {navLinks.map((item) => (
            <Button
              component={Link}
              to={item.path}
              sx={{
                color: "inherit",
                letterSpacing: 1,
                textTransform: "capitalize",
              }}
            >
              {item.label}
            </Button>
          ))}
          {/* <Button color="inherit" component={Link} to="/profile/1">
            Profile
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
