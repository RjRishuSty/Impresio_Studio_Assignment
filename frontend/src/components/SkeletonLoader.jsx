import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonLoader = () => {
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
    </Grid>
  );
};

export default SkeletonLoader;
