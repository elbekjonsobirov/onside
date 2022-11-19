import React, { useState } from "react";
import "./MatchCenter.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import markImgArsenal from "../../../svg/Arsenal_FC 1.svg";
import markLeague from "../../../../Imgs/image28.png";

export default function MatchCenter() {
  const [allMatch] = useState([
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
  ]);

  const [markMatch, setmarkMatch] = useState([
    {
      status: "live",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
    {
      status: "line",
      tablo: 4,
      data: "25.12.2023",
      time: "23:45",
    },
  ]);

  function markFunc(index) {
    let num = markMatch.length + index;
    setmarkMatch(allMatch.slice(0, num));
  }



  return (
    <div className="markMatch">
      <div className="markMatchCard">
        <h1 className="markMatchTitle">MARKAZIY O‘YINLAR</h1>
        <a href="/">
          <span>Barcha</span>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.2013 0.254798C6.61287 -0.11348 7.24506 -0.0783878 7.61334 0.33318L10.7452 3.83317C11.0849 4.21282 11.0849 4.78718 10.7452 5.16683L7.61334 8.66682C7.24506 9.07839 6.61287 9.11348 6.2013 8.7452C5.78973 8.37692 5.75464 7.74473 6.12292 7.33316L7.76328 5.5L1 5.5C0.447715 5.5 0 5.05228 0 4.5C5.96046e-08 3.94772 0.447715 3.5 1 3.5L7.76328 3.5L6.12292 1.66683C5.75464 1.25527 5.78973 0.623077 6.2013 0.254798Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {markMatch.map((item, index) => (
          <SwiperSlide className="markMatchItem">
            <div className="markMatchTitleCard">
              <h3 className="markMatchTitle">Priemier league – England</h3>
              <h4 className="markMatchStadium">Etihad stadium</h4>
            </div>
            <div className="markMatchAboutCard">
              <div className="markMatchAbout">
                <img src={markImgArsenal} alt="" className="markMatchLogo" />
                <h4 className="markMatchName">Arsenal</h4>
              </div>
              <div className="markMatchInfo">
                <img src={markLeague} alt="" className="markMatchLigaLogo" />
                <h5 className="markMatchData">Today</h5>
                <h4 className="markMatchVal">
                  {item.tablo}:{item.tablo}
                </h4>
                <button className="markMatchSharh">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0C15.5229 0 20 4.47716 20 10C20 15.5229 15.5228 20 10 20C4.47714 20 0 15.5228 0 10C0 4.47714 4.47716 0 10 0V0ZM5.64659 11.2881C5.74136 11.2572 7.00412 11.2793 7.21921 11.2793C7.58481 11.2793 11.1052 11.2538 11.1855 11.2948C11.2855 11.3459 11.2616 11.4929 11.2618 11.626C11.2622 12.0099 11.2316 11.9159 10.3658 11.9159C9.82369 11.9159 5.7015 11.9434 5.61824 11.8985C5.52171 11.8463 5.54602 11.7059 5.54592 11.5735C5.54578 11.4286 5.52338 11.3282 5.64661 11.2881L5.64659 11.2881ZM5.5459 9.58066C5.5459 9.42982 5.58292 9.375 5.7333 9.375H13.5999C13.7432 9.375 13.8013 9.40232 13.8013 9.56318C13.8013 9.87474 13.8451 10.0118 13.5999 10.0117H5.7508C5.50437 10.0117 5.54592 9.8894 5.54592 9.58064L5.5459 9.58066ZM5.65171 7.48022C5.73597 7.45012 12.5644 7.47019 13.4251 7.47017C13.638 7.47017 13.798 7.42057 13.8018 7.65745C13.8044 7.82356 13.8417 8.06249 13.6957 8.101C13.596 8.1273 6.59161 8.10731 5.9081 8.10733C5.69899 8.10733 5.54905 8.15115 5.54554 7.92075C5.54184 7.67905 5.50799 7.53153 5.65171 7.4802V7.48022ZM4.9176 14.4566L6.2062 15.9605C6.35535 16.1165 6.56891 16.398 6.72372 16.5617C6.80587 16.6485 6.95156 16.7383 7.13201 16.7332C7.45999 16.7239 7.62474 16.4179 7.7792 16.259L8.04137 15.9618C8.08712 15.9127 8.12157 15.8702 8.17236 15.8134C8.21626 15.7642 8.25302 15.7204 8.30261 15.6639L9.34888 14.4575C9.78311 14.4417 10.2434 14.4556 10.6805 14.4556H15.9948C16.3079 14.4556 16.7528 14.5069 16.9289 14.0635C17.0153 13.8458 16.9778 13.0728 16.9778 12.7797V6.13685C16.9778 5.39177 17.0262 4.93014 16.1871 4.93064H4.21242C3.60555 4.93064 3.00582 4.82557 3.00621 5.71731V13.6888C3.00603 13.9282 3.01732 14.0507 3.14579 14.2134C3.23087 14.3212 3.36638 14.429 3.57102 14.4514C3.74681 14.4707 4.64249 14.4517 4.91762 14.4566H4.9176Z"
                      fill="white"
                    />
                  </svg>
                  <p className="markMatchSharhBtn">translatsiya</p>
                </button>
                <button className="markMatchSharh">
                  <svg
                    className="MarMatchSvgId"
                    id={index}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="MarMatchSvgId"
                      id={index}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.59463 13.7288L11.4095 13.7361L11.4094 14.6102C11.8762 14.6083 12.496 14.5527 12.8719 14.7462C13.2138 14.9223 13.4948 15.2511 13.4081 15.8005L6.57999 15.7999C6.52137 15.2514 6.75945 14.9321 7.11752 14.75C7.54603 14.5322 8.06388 14.6311 8.5802 14.6074L8.59463 13.7288ZM2.92911 4.50861L17.0619 4.50726L17.0649 4.66248L17.0652 13.4079L17.0635 13.5203L2.92767 13.5209L2.92911 4.50861ZM0.00811448 10.4154C0.219061 15.7949 4.78585 20.2292 10.4181 19.985C11.9214 19.9198 13.2296 19.545 14.4087 18.9715C15.2126 18.5805 15.6862 18.2316 16.3264 17.7417C16.5331 17.5835 17.3072 16.8439 17.4474 16.6714C17.5065 16.5987 17.5156 16.5864 17.5916 16.5065C18.1747 15.893 18.9176 14.5816 19.2466 13.8003C20.7372 10.2606 19.9539 6.13454 17.4456 3.3369C17.3426 3.22211 17.2735 3.11087 17.1506 3.01187C17.0656 2.94342 17.0767 2.94245 17 2.8533L16.16 2.11912C15.5282 1.59755 14.5558 1.07073 13.7944 0.74482C11.0856 -0.4148 7.74979 -0.198724 5.16681 1.24215C3.73511 2.04078 2.50028 3.17229 1.61229 4.55115C0.510768 6.26154 -0.0771038 8.24235 0.00811448 10.4154ZM4.57145 6.11519L15.4284 6.1142L15.4283 11.8119L4.56486 11.8071L4.57145 6.11519ZM3.91905 12.4816L16.073 12.4866L16.0743 5.5443L3.9208 5.54432L3.91905 12.4816ZM6.57128 7.91106L7.88302 7.9118L7.88384 10.8011L8.6969 10.7996L8.70203 7.92454L9.88734 7.91016L11.0906 10.7976L11.7669 10.7997C11.925 10.4029 13.2412 7.34184 13.2425 7.22761L12.3884 7.22909L11.9093 8.39897C11.827 8.59727 11.7544 8.79028 11.6736 8.98791C11.6328 9.08763 11.5917 9.18617 11.5534 9.28073C11.5172 9.37008 11.4866 9.49356 11.4241 9.56702L10.476 7.22882L6.58485 7.2288L6.57128 7.91106Z"
                      fill="white"
                    />
                  </svg>
                  <p className="markMatchSharhBtn" id={index}>
                    translatsiya
                  </p>
                </button>
              </div>
              <div className="markMatchAbout">
                <img src={markImgArsenal} alt="" className="markMatchLogo" />
                <h4 className="markMatchName">Arsenal</h4>
              </div>
            </div>
            <div className="markMatchTranCard"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="markMatchBtnCard">
        <button className="markMatchAdd" onClick={() => markFunc(2)}>
          +2 qo'shish
        </button>
        <button className="markMatchAdd" onClick={() => markFunc(5)}>
          +5 qo'shish
        </button>
      </div>
    </div>
  );
}
