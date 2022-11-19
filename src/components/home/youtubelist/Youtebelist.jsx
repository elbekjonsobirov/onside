import React, { useState, useEffect } from "react";
import "./Youtebe.css";
import Rating from "@mui/material/Rating";

export default function Youtubelist() {
  const [value] = useState(3);
  const [YTArr] = useState([
    {
      img: "https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/professional-african-football-soccer-player-isolated-white-background-professional-african-american-football-soccer-player-138420461.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/professional-african-football-soccer-player-isolated-white-background-professional-african-american-football-soccer-player-138420461.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/professional-african-football-soccer-player-isolated-white-background-professional-african-american-football-soccer-player-138420461.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/professional-african-football-soccer-player-isolated-white-background-professional-african-american-football-soccer-player-138420461.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
    {
      img: "https://thumbs.dreamstime.com/b/professional-african-football-soccer-player-isolated-white-background-professional-african-american-football-soccer-player-138420461.jpg",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sx6dK9lQiok4v2i0/videoblocks-samara-russia-july-7-2018-world-cup-russia-samara-the-quarterfinal-england-vs-sweden-cosmos-arena-samara-stadium_sdefa9c9x__e0830a772eba2b811a9b1ecafbe6b077__P360.mp4",
    },
  ]);
  const [YTOneVideo, setYTOneVideo] = useState([]);
  const [YTitemId, setYTItemId] = useState(0);

  function YTFun(index) {
    setYTItemId(index);
    let removeItem = document.querySelector(".YTOneVideoImg"),
      PlayBtn = document.querySelector(".YTOnePlayBtn");

    removeItem.classList.remove("YTimgRemove");
    PlayBtn.classList.remove("YTimgRemove");
  }



  function removeImg() {
    let removeItem = document.querySelector(".YTOneVideoImg"),
      PlayBtn = document.querySelector(".YTOnePlayBtn");
      
    removeItem.classList.add("YTimgRemove");
    PlayBtn.classList.add("YTimgRemove");
  }
  

  useEffect(() => {
    setYTOneVideo(YTArr[YTitemId]);
  });



  return (
    <div className="YTPage">
      <div className="YTTitleCard">
        <h1 className="YTTitle">Video YANGILIKLAR</h1>
        <a href="/" className="YTBarchaUrl">
          <span>Barcha videolar</span>
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
      <div className="YTVideosCard">
        <div className="YTOneVideosCard">
          <div className="YTOneVideos" onClick={() => removeImg()}>
            <iframe src={YTOneVideo.video}></iframe>
            <div
              className="YTOneVideoImg"
              style={{
                backgroundImage: `url(${YTOneVideo.img})`,
              }}
            ></div>
            <span class="YTOnePlayBtn"></span>
          </div>
          <div className="YTOneVideosAbout">
            <div className="YTOneVideoLikeCard">
              <div className="YTOneLikeItems">
                <h5 className="YTLikeName">Ko'rildi</h5>
                <svg
                  width="17"
                  height="9"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5.00768C0.483743 6.08554 2.6836 7.73297 3.68164 8.36256C8.05918 11.1241 12.1521 10.165 15.8901 7.18346C16.5092 6.68965 17.6224 5.68843 18 5.00768C16.4747 2.50889 11.997 -0.0171821 8.97012 8.80533e-05C5.75981 0.0184531 3.68905 1.58665 1.62344 3.17595L0.729527 4.02811C0.596905 4.14516 0.0902708 4.77032 0 5.00768ZM9 0.891067C11.3294 0.891067 13.2176 2.73066 13.2176 4.99996C13.2176 7.26926 11.3294 9.10885 9 9.10885C6.67064 9.10885 4.78236 7.26926 4.78236 4.99996C4.78236 2.73066 6.67064 0.891067 9 0.891067Z"
                    fill="white"
                  />
                  <path
                    d="M9 7.05999C10.1678 7.05999 11.1145 6.13771 11.1145 5.00002C11.1145 3.86233 10.1678 2.94005 9 2.94005C7.8322 2.94005 6.88551 3.86233 6.88551 5.00002C6.88551 6.13771 7.8322 7.05999 9 7.05999Z"
                    fill="white"
                  />
                </svg>
                <h4 className="YTLikeNum">100993187</h4>
              </div>
              <div className="YTOneLikeItems">
                <h5 className="YTLikeName">Like</h5>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55838 0.0617675C6.23881 -0.0390265 5.89031 -0.0160012 5.58707 0.127466C5.25261 0.2857 4.99741 0.579826 4.90166 0.942211L4.61095 2.04252C4.5288 2.35347 4.40901 2.65409 4.25421 2.93861C4.04732 3.31888 3.71626 3.64248 3.31625 3.9809L2.43703 4.72478C2.06652 5.03825 1.86939 5.51041 1.91202 5.9945L2.40834 11.6301C2.47722 12.4122 3.14008 13 3.91999 13H6.76081C9.11109 13 11.1509 11.3894 11.5461 9.1457L11.9772 6.69785C12.1406 5.77021 11.4141 4.94052 10.4824 4.94052H7.31614L7.31378 4.94043C7.31273 4.94034 7.31153 4.9401 7.31153 4.9401L7.30965 4.93947L7.30793 4.9384L7.71232 2.51515C7.78978 2.05095 7.76764 1.57596 7.64738 1.12079C7.51649 0.625357 7.13212 0.24273 6.64697 0.0897099L6.55838 0.0617675Z"
                    fill="white"
                  />
                  <path
                    d="M0.998072 5.39666C0.974595 5.13008 0.745393 4.92925 0.478046 4.941C0.2107 4.95275 0 5.17291 0 5.44052V12.2076C0 12.6533 0.365173 13 0.797431 13C1.25603 13 1.63342 12.6108 1.59183 12.1386L0.998072 5.39666Z"
                    fill="white"
                  />
                </svg>
                <h4 className="YTLikeNum">522230</h4>
              </div>
              <div className="YTOneLikeItems">
                <h5 className="YTLikeName">Izohlar</h5>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5C0 8.26142 2.23858 10.5 5 10.5H8.31446C8.55632 10.5 8.7649 10.5 8.93558 10.4835C9.11634 10.4659 9.29469 10.427 9.46004 10.3231C9.60681 10.2309 9.73092 10.1068 9.82314 9.96004C9.92704 9.79469 9.96593 9.61634 9.98347 9.43558C10 9.2649 10 9.05632 10 8.81446V5.5C10 2.73858 7.76142 0.5 5 0.5ZM2.30769 4.73077C2.30769 4.51835 2.47989 4.34615 2.69231 4.34615H5.38461C5.59703 4.34615 5.76923 4.51835 5.76923 4.73077C5.76923 4.94319 5.59703 5.11538 5.38461 5.11538H2.69231C2.47989 5.11538 2.30769 4.94319 2.30769 4.73077ZM2.30769 6.26923C2.30769 6.05681 2.47989 5.88461 2.69231 5.88461H7.30769C7.52011 5.88461 7.69231 6.05681 7.69231 6.26923C7.69231 6.48165 7.52011 6.65385 7.30769 6.65385H2.69231C2.47989 6.65385 2.30769 6.48165 2.30769 6.26923Z"
                    fill="white"
                  />
                </svg>

                <h4 className="YTLikeNum">350000</h4>
              </div>
              <div className="YTOneLikeRating">
                <Rating
                  className="YTOneRating"
                  name="read-only"
                  value={value}
                  readOnly
                />
              </div>
              <div className="YTOneLikeTime">
                <h6 className="YTLikeTimeClock">23:43</h6>
                <h6 className="YTLikeTimeData">12:02:2022</h6>
              </div>
            </div>
            <h1 className="YTOneVideoTitle">
              Moliyaviy muammolar, yopiq aeroport, yangi vektor? Nega Krasnodar
              murabbiy va legionerlarini yo'qotdi
            </h1>
          </div>
        </div>
        <div className="YTAllVideosCard">
          <div className="YTAllVideos">
            {YTArr.map((item, index) => (
              <button className="YTAllVideosItem" onClick={() => YTFun(index)} key={index}>
                <div className="YTAllVideoImg">
                  <video src={item.vid}></video>
                  <div
                    className="YTAllVideoBgImg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <span class="YTAllPlayBtn"></span>
                </div>
                <div className="YTAllVideoAbout">
                  <div className="YTOneTimeCard">
                    <div className="YTAllTime">
                      <h6 className="YTAllTimeClock">23:43</h6>
                      <h6 className="YTAllTimeData">12:02:2022</h6>
                    </div>
                    <a href="/" className="YTAllItemUrl">
                      <i class="fa-solid fa-circle"></i>
                      Chempionlar ligasi
                    </a>
                  </div>
                  <h1 className="YTAllVideosTitle">
                    “Spartak” “Krasnodar”ga yutqazmaydi, SSKA “Lokomotiv”ni
                    yutadi. RPLning 21-turi uchun tahminlar
                  </h1>
                  <div className="YTAllVideosViewCard">
                    <div className="YTAllVideosView">
                      <h3 className="YtAllVideosViewName">Ko‘rildi</h3>
                      <svg
                        width="21"
                        height="12"
                        viewBox="0 0 21 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_231_2496)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.76135 6.00768C2.23073 7.08554 4.36524 8.73297 5.33363 9.36256C9.58115 12.1241 13.5525 11.165 17.1795 8.18346C17.7802 7.68965 18.8603 6.68843 19.2267 6.00768C17.7468 3.50889 13.402 0.982818 10.465 1.00009C7.35008 1.01845 5.34082 2.58665 3.33658 4.17595L2.46921 5.02811C2.34053 5.14516 1.84894 5.77032 1.76135 6.00768ZM10.494 1.89107C12.7542 1.89107 14.5864 3.73066 14.5864 5.99996C14.5864 8.26926 12.7542 10.1089 10.494 10.1089C8.23385 10.1089 6.40166 8.26926 6.40166 5.99996C6.40166 3.73066 8.23385 1.89107 10.494 1.89107Z"
                            fill="#DADADA"
                          />
                          <path
                            d="M10.494 8.05999C11.6271 8.05999 12.5457 7.13771 12.5457 6.00002C12.5457 4.86233 11.6271 3.94005 10.494 3.94005C9.36091 3.94005 8.44235 4.86233 8.44235 6.00002C8.44235 7.13771 9.36091 8.05999 10.494 8.05999Z"
                            fill="#DADADA"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_231_2496"
                            x="0.761353"
                            y="0"
                            width="19.4653"
                            height="12"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_231_2496"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_231_2496"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <h3 className="YtAllVideosViewNum">3187</h3>
                    </div>
                    <div className="YTAllVideosView">
                      <h3 className="YtAllVideosViewName">Like</h3>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_231_2488)">
                          <path
                            d="M7.87871 1.06177C7.56863 0.960974 7.23048 0.983999 6.93625 1.12747C6.61173 1.2857 6.36411 1.57983 6.27121 1.94221L5.98913 3.04252C5.90942 3.35347 5.79318 3.65409 5.64298 3.93861C5.44224 4.31888 5.12101 4.64248 4.73289 4.9809L3.87978 5.72478C3.52027 6.03825 3.329 6.51041 3.37037 6.9945L3.85195 12.6301C3.91878 13.4122 4.56195 14 5.31869 14H8.07513C10.3556 14 12.3348 12.3894 12.7183 10.1457L13.1366 7.69785C13.2952 6.77021 12.5902 5.94052 11.6861 5.94052H8.61397L8.61168 5.94043C8.61066 5.94034 8.60949 5.9401 8.60949 5.9401L8.60767 5.93947L8.606 5.9384L8.99837 3.51515C9.07354 3.05095 9.05206 2.57596 8.93537 2.12079C8.80836 1.62536 8.43541 1.24273 7.96467 1.08971L7.87871 1.06177Z"
                            fill="#DADADA"
                          />
                          <path
                            d="M2.48356 6.39666C2.46078 6.13008 2.23839 5.92925 1.97898 5.941C1.71958 5.95275 1.51514 6.17291 1.51514 6.44052V13.2076C1.51514 13.6533 1.86946 14 2.28888 14C2.73386 14 3.10004 13.6108 3.05968 13.1386L2.48356 6.39666Z"
                            fill="#DADADA"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_231_2488"
                            x="0.515137"
                            y="0"
                            width="13.6439"
                            height="15"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_231_2488"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_231_2488"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <h3 className="YtAllVideosViewNum">230</h3>
                    </div>
                    <div className="YTAllVideosView">
                      <h3 className="YtAllVideosViewName">Izohlar</h3>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_231_2494)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.53264 1.5C3.85324 1.5 1.68115 3.73858 1.68115 6.5C1.68115 9.26142 3.85324 11.5 6.53264 11.5H9.74865C9.98332 11.5 10.1857 11.5 10.3513 11.4835C10.5267 11.4659 10.6998 11.427 10.8602 11.3231C11.0026 11.2309 11.123 11.1068 11.2125 10.96C11.3133 10.7947 11.3511 10.6163 11.3681 10.4356C11.3841 10.2649 11.3841 10.0563 11.3841 9.81446V6.5C11.3841 3.73858 9.21204 1.5 6.53264 1.5ZM3.9203 5.73077C3.9203 5.51835 4.08738 5.34615 4.29349 5.34615H6.90583C7.11194 5.34615 7.27902 5.51835 7.27902 5.73077C7.27902 5.94319 7.11194 6.11538 6.90583 6.11538H4.29349C4.08738 6.11538 3.9203 5.94319 3.9203 5.73077ZM3.9203 7.26923C3.9203 7.05681 4.08738 6.88461 4.29349 6.88461H8.77178C8.97789 6.88461 9.14498 7.05681 9.14498 7.26923C9.14498 7.48165 8.97789 7.65385 8.77178 7.65385H4.29349C4.08738 7.65385 3.9203 7.48165 3.9203 7.26923Z"
                            fill="#DADADA"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_231_2494"
                            x="0.681152"
                            y="0.5"
                            width="11.7029"
                            height="12"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_231_2494"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_231_2494"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <h3 className="YtAllVideosViewNum">35</h3>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
