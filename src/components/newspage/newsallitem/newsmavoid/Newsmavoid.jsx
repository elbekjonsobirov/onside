import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import "./Newsmavoid.css";
import {useParams } from "react-router-dom";
import axios from "axios";

export default function Newsmavoid() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [newsItem, setNewsItem] = useState([])
  
  useEffect(() => {
   axios.get(`https://185.196.213.14:3001/news/byType?type=${categoryId}&page=1&limit=25`)
        .then(res=>setNewsItem(res.data.data))
  },[categoryId])

  return (
    <div className="newsMavOid">
      <div className="newMavOidTitleCard">MAVZUGA OID yangiliklar</div>
      <div className="newsMavOidAllItems">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newsItem.length !== 0 ? newsItem.map((item, index) => (
            <SwiperSlide
              onClick={() => {
                navigate(`/${categoryId}/${index}`);
              }}
              className="newsMavOidItem"
              key={index}
            >
              <div className="">
                <div
                  className="newsMavOidImg"
                  style={{
                    backgroundImage: `url(${item.image.url})`,
                  }}
                ></div>
                <div className="newsMavOidAbout">
                  <a href="/" className="newsMavOidTag">
                    Chempionlar ligasi
                  </a>
                  <h1 className="newsMavOidTitle">
                    {item.text.length > 60 ? `${item.text.slice(0, 60)}...` : item.text}
                  </h1>
                  <div className="newsMavOidComm">
                    <div className="newsMavOidLike">
                      <span>{item.likes}</span>
                      <svg width="15" height="16" viewBox="0 0 12 14">
                        <path d="M6.55838 0.561768C6.23881 0.460974 5.89031 0.483999 5.58707 0.627466C5.25261 0.7857 4.99741 1.07983 4.90166 1.44221L4.61095 2.54252C4.5288 2.85347 4.40901 3.15409 4.25421 3.43861C4.04732 3.81888 3.71626 4.14248 3.31625 4.4809L2.43703 5.22478C2.06652 5.53825 1.86939 6.01041 1.91202 6.4945L2.40834 12.1301C2.47722 12.9122 3.14008 13.5 3.91999 13.5H6.76081C9.11109 13.5 11.1509 11.8894 11.5461 9.6457L11.9772 7.19785C12.1406 6.27021 11.4141 5.44052 10.4824 5.44052H7.31614L7.31378 5.44043C7.31273 5.44034 7.31153 5.4401 7.31153 5.4401L7.30965 5.43947L7.30793 5.4384L7.71232 3.01515C7.78978 2.55095 7.76764 2.07596 7.64738 1.62079C7.51649 1.12536 7.13212 0.74273 6.64697 0.58971L6.55838 0.561768Z" />
                        <path d="M0.998072 5.89666C0.974595 5.63008 0.745393 5.42925 0.478046 5.441C0.2107 5.45275 0 5.67291 0 5.94052V12.7076C0 13.1533 0.365173 13.5 0.797431 13.5C1.25603 13.5 1.63342 13.1108 1.59183 12.6386L0.998072 5.89666Z" />
                      </svg>
                    </div>
                    <div className="newsMavOidComment">
                      <span>{item.comments}</span>
                      <svg width="15" height="16" viewBox="0 0 15 13">
                        <path d="M7.21991 5.15673C7.79695 4.98242 8.23373 5.28523 8.37739 5.70529C8.56678 6.25892 8.24485 6.78782 7.82026 6.91821C6.51867 7.31795 6.06753 5.50473 7.21986 5.15668L7.21991 5.15673ZM3.45375 5.1698C4.61848 4.76209 5.16341 6.42602 4.1463 6.88669C2.9916 7.40967 2.15529 5.62434 3.45375 5.1698ZM11.0285 5.13053C12.2437 4.86097 12.6426 6.61545 11.5383 6.92433C10.2362 7.28853 9.80808 5.40121 11.0285 5.13053ZM4.42121 11.5629C6.3659 11.9997 7.53516 12.3815 9.85279 11.7714C13.0028 10.9421 15.682 8.20609 14.845 4.82338C14.0561 1.63562 10.4991 -0.0345449 7.4159 0.00054165C4.20181 0.0370582 0.76813 1.86314 0.11849 4.94968C-0.472905 7.75926 1.33946 9.39868 1.38453 9.56277C1.31126 10.2913 1.05467 10.9119 0.728614 11.4272C0.51025 11.7723 0.381413 11.8698 0.17303 12.1493C-0.0733756 12.4797 -0.0156968 12.6967 0.200558 12.9516C1.62842 13.2424 3.61129 12.1535 4.42121 11.5629V11.5629Z" />
                      </svg>
                    </div>
                    <div className="newsMavOidReyting">
                      <Rating
                        className="newsMavOidRat"
                        name="simple-controlled"
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )):''}
        </Swiper>
      </div>
    </div>
  );
}
