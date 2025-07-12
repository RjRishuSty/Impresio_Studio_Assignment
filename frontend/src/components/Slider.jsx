import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../assets/review.png";
import { Avatar, Box, Card, Rating, Typography } from "@mui/material";

const Slider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      sx={{ mt: 5 }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.name}>
          <Box sx={{display:'flex',justifyContent:'center',py:3}}>
            <Card
            sx={{
              width: "100%",
              p:2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={img1}
              alt={item.name}
              sx={{ width: 60, height: 60, mb: 1 }}
            />
            <Typography variant="body1">{item.name}</Typography>
            <Rating
              value={item.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ mt: 0.5 }}
            />
            <Typography variant="body2" sx={{mt:1}}>{item.comment}</Typography>
          </Card>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
