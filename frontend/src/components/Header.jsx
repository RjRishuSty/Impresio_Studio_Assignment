import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];
const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <AppBar
      position="static"
      color="primary"
      enableColorOnDark
      sx={{ boxShadow: "none" }}
    >
      <Toolbar>
        <Logo />
        {isMobile ? (
          <IconButton 
          // onClick={handleShowSidebar}
          >
            <MenuIcon size="large" sx={{color:'#fff'}} />
          </IconButton>
        ) : (
          <Box>
            {navLinks.map((item, index) => (
              <Button
                key={index}
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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
