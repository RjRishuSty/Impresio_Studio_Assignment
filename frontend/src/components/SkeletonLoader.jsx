import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const SkeletonLoader = ({ useIn }) => {
  const renderLoader = () => {
    switch (useIn) {
      case "category":
        return (
          <Grid container spacing={2} sx={{ p: 1 }}>
            {[...Array(6)].map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Stack spacing={1} sx={{ p: 1 }}>
                  <Skeleton
                    variant="circular"
                    width={80}
                    height={80}
                    sx={{ mx: "auto" }}
                  />
                  <Skeleton variant="text" width="60%" sx={{ mx: "auto" }} />
                  <Skeleton variant="text" width="40%" sx={{ mx: "auto" }} />
                  <Skeleton variant="rounded" height={60} />
                  <Skeleton variant="rounded" height={40} />
                </Stack>
              </Grid>
            ))}
            ;
          </Grid>
        );

      case "profile":
        return (
          <Container sx={{ py: 5 }}>
            <Grid container rowSpacing={3} columnSpacing={1} sx={{ mt: 5 }}>
              <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                <Stack spacing={2}>
                  <Skeleton variant="text" width="80%" height={35} />
                  <Skeleton variant="text" width="90%" />
                  <Skeleton variant="text" width="50%" />
                  <Skeleton variant="text" width="40%" />
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rectangular" width="100%" height={45} />
                </Stack>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 7 }}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width="550px"
                  height="350px"
                  sx={{
                    borderRadius: "10%",
                    filter: "brightness(90%)",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                <Grid container spacing={2}>
                  {[1, 2, 3].map((i) => (
                    <Grid item xs={6} sm={4} key={i}>
                      <Skeleton variant="rounded" width="100%" height={120} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ backgroundColor: "#f2f2f2", py: 5, mt: 7 }}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
              >
                <Skeleton width="40%" sx={{ mx: "auto" }} />
              </Typography>
              <Container maxWidth="sm">
                <Stack spacing={2}>
                  {[1, 2, 3].map((i) => (
                    <Skeleton
                      key={i}
                      variant="text"
                      width="100%"
                      height={24}
                      sx={{ mx: "auto" }}
                    />
                  ))}
                </Stack>
              </Container>
            </Box>
          </Container>
        );

      default:
        return <Typography>No load Found</Typography>;
    }
  };
  return <>{renderLoader()}</>;
};

export default SkeletonLoader;
