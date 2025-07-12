import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";


const Slider = ({data}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={10}
    >
      {data.map((item) => (
        <SwiperSlide key={item.title || item.id}></SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
