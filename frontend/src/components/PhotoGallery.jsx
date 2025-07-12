import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo2.jpg";

const PhotoGallery = ({ data }) => {
  console.log("photodata", data);

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
              src={index === 0 ? img1 : img2}
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
