import React from "react";
import "./Card.css";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Card({ cardinfo }) {
  return (
    <div className="card">
      <Swiper
        slidesPerView={1}
        spaceBetween={11}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {cardinfo.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={i} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <img src={hotel} alt="" className="card-img" /> */}
      <div className="card-info">
        <div className="card-bottom">
          <div className="hotel-name">{cardinfo.title}</div>
          <div className="card-rating">
            <StarIcon fontSize="smaller" />
            <p>4.22</p>
          </div>
        </div>
        <div className="feature">{cardinfo.desc}</div>
        <div className="feature">{cardinfo.date}</div>
        <div className="cost">
          $<span className="cost-number">{cardinfo.price}</span> night
        </div>
      </div>
    </div>
  );
}
