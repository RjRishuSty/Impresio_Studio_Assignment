import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../assets/review.png";
import { Avatar, Box, Card, Rating, Typography } from "@mui/material";

const Slider = ({ data, useIn }) => {
  const handleRender = () => {
    switch (useIn) {
      case "rating":
        return data.map((item) => (
          <SwiperSlide
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width:{xs:'100%',sm:'100%',md: "80%"}, py: 3 }}>
              <Card
                sx={{
                  width: "100%",
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: 5,
                }}
              >
                <Avatar
                  src={img1}
                  alt={item.name}
                  sx={{ width: 80, height: 80, mb: 1 }}
                />
                <Typography variant="body1">{item.name}</Typography>
                <Rating
                  value={item.rating}
                  precision={0.1}
                  readOnly
                  sx={{ mt: 0.5 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.comment}
                </Typography>
              </Card>
            </Box>
          </SwiperSlide>
        ));
      case "showImg":
        return data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={item}
                sx={{
                  width: { sm: "100%", md: "550px" },
                  height: "350px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: { sm: 1, md: 5 },
                  filter: "brightness(90%)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    filter: "brightness(100%)",
                  },
                }}
                alt="Gallery"
                loading="lazy"
              />
            </Box>
          </SwiperSlide>
        ));

      default:
        return <Typography>NOt Found</Typography>;
    }
  };
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
      spaceBetween={150}
    >
      {handleRender()}
    </Swiper>
  );
};

export default Slider;
