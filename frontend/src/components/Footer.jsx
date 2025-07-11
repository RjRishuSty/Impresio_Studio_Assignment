import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        py: 3,
        px: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1" color="text.primary" gutterBottom>
        © {new Date().getFullYear()} Pixisphere. All rights reserved.
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Built with ❤️ using React & MUI
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="https://your-portfolio.com"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ mx: 1 }}
        >
          Portfolio
        </Link>
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ mx: 1 }}
        >
          GitHub
        </Link>
        <Link
          href="mailto:your.email@example.com"
          underline="hover"
          sx={{ mx: 1 }}
        >
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
