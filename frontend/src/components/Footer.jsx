import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 5,
        px: 2,
        textAlign: "center",
        backgroundColor: 'primary.dark',
        color:'#fff'
      }}
    >
      <Typography variant="body1" gutterBottom>
        © {new Date().getFullYear()} Pixisphere. All rights reserved.
      </Typography>

      <Typography variant="body2">
        Built By{" "}
        <Typography
          variant="body2"
          component="a"
          target="_blank"
          href="https://rishu-portfolio-three.vercel.app/"
          sx={{color:'#fff'}}
        >
          @RishuRaj
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
