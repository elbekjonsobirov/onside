import React, { useState, useEffect } from "react";
import "./Latesnew.css";
// svg
import latSvg from "../../../svg/Vector (Stroke) (3).svg";
// Material UI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Latesnew() {
  const navigate = useNavigate();
  let DateDay = new Date()
  const [latNewsAll, setLatNewsAll] = useState([])

  useEffect(() => {
    const latFunc = async () => {
      const latItem = await axios.get('http://185.196.213.14:3001/news/byType?type=COMMON&page=1&limit=25')
      setLatNewsAll(latItem.data.data);
    }

    latFunc()
  },[])
  return (
    <div className="latNewsPage">
      <div className="latTitleCard">
        <h1 className="latTitle">So‘ngI yangiliklar</h1>
        <div
          onClick={() => {
            navigate(`/category/COMMON`);
          }}
          className="latBarchaUrl"
        >
          Barcha
          <img src={latSvg} alt="" />
        </div>
      </div>
      <div className="latFilCard">
        <div className="latNewsName">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_41_2389)">
              <path
                d="M14.25 14.625C14.25 14.0037 14.7537 13.5 15.375 13.5C15.9963 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 15.9963 15.75 15.375 15.75C14.7537 15.75 14.25 15.2463 14.25 14.625Z"
                fill="white"
              />
              <path
                d="M7.50001 9.37501C7.50001 8.75369 8.00369 8.25001 8.62501 8.25001C9.24634 8.25001 9.75001 8.75369 9.75001 9.37501C9.75001 9.99634 9.24634 10.5 8.62501 10.5C8.00369 10.5 7.50001 9.99634 7.50001 9.37501Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.25001L11.8563 2.25001C9.90062 2.24986 8.76352 2.24977 7.80887 2.50557C5.22068 3.19907 3.19907 5.22068 2.50557 7.80887C2.24977 8.76352 2.24986 9.90062 2.25001 11.8563L2.25001 12L2.25001 12.1437C2.24986 14.0994 2.24977 15.2365 2.50557 16.1912C3.19907 18.7793 5.22068 20.801 7.80887 21.4945C8.76352 21.7503 9.90062 21.7502 11.8563 21.75L12 21.75L12.1437 21.75C14.0994 21.7502 15.2365 21.7503 16.1912 21.4945C18.7793 20.801 20.801 18.7793 21.4945 16.1912C21.7503 15.2365 21.7502 14.0994 21.75 12.1437L21.75 12L21.75 11.8563C21.7502 9.90062 21.7503 8.76352 21.4945 7.80887C20.801 5.22068 18.7793 3.19907 16.1912 2.50557C15.2365 2.24977 14.0994 2.24986 12.1437 2.25001L12 2.25001ZM6.00001 9.37501C6.00001 7.92527 7.17527 6.75001 8.62501 6.75001C10.0748 6.75001 11.25 7.92527 11.25 9.37501C11.25 10.5641 10.4593 11.5686 9.37501 11.8913V16.5C9.37501 16.9142 9.03923 17.25 8.62501 17.25C8.2108 17.25 7.87501 16.9142 7.87501 16.5V11.8913C6.79071 11.5686 6.00001 10.5641 6.00001 9.37501ZM15.375 6.75001C15.7892 6.75001 16.125 7.0858 16.125 7.50001V12.1087C17.2093 12.4314 18 13.4359 18 14.625C18 16.0748 16.8248 17.25 15.375 17.25C13.9253 17.25 12.75 16.0748 12.75 14.625C12.75 13.4359 13.5407 12.4314 14.625 12.1087V7.50001C14.625 7.0858 14.9608 6.75001 15.375 6.75001Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_41_2389"
                x="0.25"
                y="0.25"
                width="23.5"
                height="23.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_41_2389"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_41_2389"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <select name="" id="">
            <option value="" className="option">
              dvsvsd
            </option>
            <option value="" className="option">
              dvsvsd
            </option>
          </select>
        </div>
        <div className="latNewsData">
          <svg
            width="30"
            height="27"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_41_2391)">
              <path
                d="M4.58654 2C3.2961 2 2.25 3.04086 2.25 4.32484V6.12419C2.25 6.80039 2.5459 7.44309 3.06055 7.88472L8.98943 12.9724C9.16098 13.1196 9.25962 13.3338 9.25962 13.5592V17.1568C9.25962 18.1574 9.90317 19.0458 10.8573 19.3623L12.415 19.8789C13.9279 20.3807 15.4904 19.2602 15.4904 17.6734V13.5592C15.4904 13.3338 15.589 13.1196 15.7606 12.9724L21.6895 7.88472C22.2041 7.44309 22.5 6.8004 22.5 6.12419V4.32484C22.5 3.04087 21.4539 2 20.1635 2H4.58654Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_41_2391"
                x="0.25"
                y="0"
                width="24.25"
                height="22"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_41_2391"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_41_2391"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <select name="" id="">
            <option value="" className="option">
              Barcha
            </option>
            <option value="" className="option">
              So'ngi 3 kun
            </option>
            <option value="" className="option">
              Hafta Davomida
            </option>
            <option value="" className="option">
              1 Oy Davomida
            </option>
          </select>
        </div>
      </div>
      <div className="latNewsCard">
        {latNewsAll.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => navigate(`/COMMON/${index}`)}
              className="latNewsItem"
            >
              <div className="latNewsImgCard" style={{backgroundImage: `url(${item.image.url})`}}>
                <h6 className="latNewsData">
                  <span>
                  {DateDay.getDate() === +item.publishedAt.slice(0, 2) ? "" : item.publishedAt.slice(5, 10)}
                  </span>
                  <span>
                  {item.publishedAt.slice(11, 16)}
                  </span>
                  </h6>
              </div>
              <div className="latNewsItemAbout">
                <h2 className="latNewsTag">{item.subCategory.name}</h2>
                <h3 className="latNewsTitle">
                  {item.text.length > 60 ? `${item.text.slice(0, 60)}...` : item.text}
                </h3>
                <Box>
                  <Rating
                    name="simple-controlled"
                    className="rating"
                    value={item.rating}
                    readOnly
                  />
                </Box>
                <div className="latNewsComCard">
                  <div className="latNewsComLike">
                    <h5 className="latNewsComAbout">Like</h5>
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.65125 0.0617675C7.27843 -0.0390265 6.87186 -0.0160012 6.51808 0.127466C6.1279 0.2857 5.83017 0.579826 5.71847 0.942211L5.37931 2.04252C5.28347 2.35347 5.14371 2.65409 4.96312 2.93861C4.72176 3.31888 4.33553 3.64248 3.86887 3.9809L2.84313 4.72478C2.41088 5.03825 2.1809 5.51041 2.23064 5.99451L2.80966 11.6301C2.89002 12.4122 3.66334 13 4.57321 13H7.88742C10.6293 13 13.009 11.3894 13.4701 9.1457L13.9731 6.69785C14.1637 5.77021 13.3161 4.94052 12.2291 4.94052H8.53529L8.53253 4.94043C8.53131 4.94034 8.52991 4.9401 8.52991 4.9401L8.52771 4.93947L8.52571 4.93841L8.99748 2.51515C9.08785 2.05095 9.06202 1.57596 8.92173 1.12079C8.76902 0.625357 8.3206 0.24273 7.7546 0.0897099L7.65125 0.0617675Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M1.16439 5.39666C1.137 5.13008 0.869604 4.92925 0.557707 4.941C0.24581 4.95275 0 5.17292 0 5.44052V12.2076C0 12.6533 0.426025 13 0.930314 13C1.46533 13 1.9056 12.6108 1.85709 12.1386L1.16439 5.39666Z"
                        fill="#F0F0F0"
                      />
                    </svg>
                    <h5 className="latNewsComAbout">{item.likes}</h5>
                  </div>
                  <div className="latNewsComLike">
                    <h5 className="latNewsComAbout">Izohlar</h5>
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.21991 5.15673C7.79695 4.98242 8.23373 5.28523 8.37739 5.70529C8.56678 6.25892 8.24485 6.78782 7.82026 6.91821C6.51867 7.31795 6.06753 5.50473 7.21986 5.15668L7.21991 5.15673ZM3.45375 5.1698C4.61848 4.76209 5.16341 6.42602 4.1463 6.88669C2.9916 7.40967 2.15529 5.62434 3.45375 5.1698ZM11.0285 5.13053C12.2437 4.86097 12.6426 6.61545 11.5383 6.92433C10.2362 7.28853 9.80808 5.40121 11.0285 5.13053ZM4.42121 11.5629C6.3659 11.9997 7.53516 12.3815 9.85279 11.7714C13.0028 10.9421 15.682 8.20609 14.845 4.82338C14.0561 1.63562 10.4991 -0.0345449 7.4159 0.00054165C4.20181 0.0370582 0.76813 1.86314 0.11849 4.94968C-0.472905 7.75926 1.33946 9.39868 1.38453 9.56277C1.31126 10.2913 1.05467 10.9119 0.728614 11.4272C0.51025 11.7723 0.381413 11.8698 0.17303 12.1493C-0.0733756 12.4797 -0.0156968 12.6967 0.200558 12.9516C1.62842 13.2424 3.61129 12.1535 4.42121 11.5629V11.5629Z"
                        fill="white"
                      />
                    </svg>
                    <h5 className="latNewsComAbout">{item.comments}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="latNewsLine">
              <span>22 yanvar</span>
              <div className="lineDiv"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
