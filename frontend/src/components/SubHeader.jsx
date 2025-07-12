import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  IconButton,
  Breadcrumbs,
  Typography,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SubHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: "primary.light",
          color: "#fff",
          "&:hover": { color: "#000" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Breadcrumbs aria-label="breadcrumb">
        <Typography
          color="text.primary"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home
        </Typography>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name} color="text.primary">
              {decodeURIComponent(name)}
            </Typography>
          ) : (
            <Typography
              key={name}
              color="inherit"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(routeTo)}
            >
              {decodeURIComponent(name)}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
};

export default SubHeader;
