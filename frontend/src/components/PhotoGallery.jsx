import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const PhotoGallery = ({ data }) => {
  if(!data) return;

  return (
    <ImageList
      sx={{
        width: "100%",
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
      cols={2}
      rowHeight={164}
    >
      {data.map((item, index) => {
        return (
          <ImageListItem key={index}>
            <Box
              component="img"
              src={item}
              sx={{
                width: "320px",
                height: "320px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 2,
              }}
              alt="Gallery"
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default PhotoGallery;
