import React, { useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];
const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showMenu, setShowMenu] = useState(false);
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
          <IconButton onClick={() => setShowMenu((prev) => !prev)}>
            {showMenu ? (
              <CloseIcon size="large" sx={{ color: "#fff" }} />
            ) : (
              <MenuIcon size="large" sx={{ color: "#fff" }} />
            )}
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
      {showMenu && (
        <Box sx={{ display:'flex',flexDirection:'column' ,mt:2}}>
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
    </AppBar>
  );
};

export default Header;
