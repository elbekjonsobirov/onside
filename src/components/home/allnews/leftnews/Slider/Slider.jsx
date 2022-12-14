import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(`https://onside-sport.uz/api/sliders`)
      .then((response) => response.json())
      .then((data) => setNewsData(data));
  },[]);
  return (
    <div className="swapperbir">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <a
            href={item.link}
            target="_blank"
              className="swapItem" rel="noreferrer"
            >
              <div
                className="swapperItemImg"
                style={{ backgroundImage: `url(${item.image.url})` }}
              ></div>
              <p>{item.text}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
