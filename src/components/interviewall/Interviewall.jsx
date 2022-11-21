import React, {useState, useEffect} from "react";
import "./Interviewall.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Interviewall() {
  const [age, setAge] = useState(10);
  const navigate = useNavigate();
  const {intURL} = window.location.href
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [interNewsAll, setInterNewsAll] = useState([])

  useEffect(() => {
    const interFunc = async () => {
      const interItem = await axios.get('http://185.196.213.14:3001/news/byType?type=INTERVIEW&page=1&limit=25')
      setInterNewsAll(interItem.data.data);
    }

    interFunc()
  },[])
  return (
    <div className="intPage">
      <div className="intPageUrl">
        <Link to="/" className="intHomeUrl">
          bosh sahifa
        </Link>
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11.1141L5.16667 6.05706L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Link to={intURL} className="intHomeUrl">
        INTERVYULAR
        </Link>
      </div>
      <div className="intAllItemCard">
        <div className="intItemCard">
          <div className="intFilCard">
            <div className="intFilTur">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_83_21911)">
                  <path
                    d="M14.25 14.625C14.25 14.0037 14.7537 13.5 15.375 13.5C15.9963 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 15.9963 15.75 15.375 15.75C14.7537 15.75 14.25 15.2463 14.25 14.625Z"
                    fill="white"
                  />
                  <path
                    d="M7.50001 9.375C7.50001 8.75368 8.00369 8.25 8.62501 8.25C9.24634 8.25 9.75001 8.75368 9.75001 9.375C9.75001 9.99632 9.24634 10.5 8.62501 10.5C8.00369 10.5 7.50001 9.99632 7.50001 9.375Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.25L11.8563 2.24999C9.90062 2.24984 8.76352 2.24976 7.80887 2.50556C5.22068 3.19906 3.19907 5.22067 2.50557 7.80886C2.24977 8.7635 2.24986 9.90061 2.25001 11.8563L2.25001 12L2.25001 12.1437C2.24986 14.0994 2.24977 15.2365 2.50557 16.1911C3.19907 18.7793 5.22068 20.8009 7.80887 21.4944C8.76352 21.7502 9.90062 21.7502 11.8563 21.75L12 21.75L12.1437 21.75C14.0994 21.7502 15.2365 21.7502 16.1912 21.4944C18.7793 20.8009 20.801 18.7793 21.4945 16.1911C21.7503 15.2365 21.7502 14.0994 21.75 12.1437L21.75 12L21.75 11.8563C21.7502 9.90061 21.7503 8.7635 21.4945 7.80886C20.801 5.22067 18.7793 3.19906 16.1912 2.50556C15.2365 2.24976 14.0994 2.24984 12.1437 2.24999L12 2.25ZM6.00001 9.375C6.00001 7.92525 7.17527 6.75 8.62501 6.75C10.0748 6.75 11.25 7.92525 11.25 9.375C11.25 10.5641 10.4593 11.5686 9.37501 11.8913V16.5C9.37501 16.9142 9.03923 17.25 8.62501 17.25C8.2108 17.25 7.87501 16.9142 7.87501 16.5V11.8913C6.79071 11.5686 6.00001 10.5641 6.00001 9.375ZM15.375 6.75C15.7892 6.75 16.125 7.08578 16.125 7.5V12.1087C17.2093 12.4314 18 13.4359 18 14.625C18 16.0747 16.8248 17.25 15.375 17.25C13.9253 17.25 12.75 16.0747 12.75 14.625C12.75 13.4359 13.5407 12.4314 14.625 12.1087V7.5C14.625 7.08578 14.9608 6.75 15.375 6.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_83_21911"
                    x="0.25"
                    y="0.249985"
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
                      result="effect1_dropShadow_83_21911"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_83_21911"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <FormControl className="intTurSelectOne">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Barcha sport turlari</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="intFilTur">
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_83_21916)">
                  <path
                    d="M4.58654 2C3.2961 2 2.25 3.04086 2.25 4.32484V6.12419C2.25 6.8004 2.5459 7.44309 3.06055 7.88472L8.98943 12.9724C9.16098 13.1196 9.25962 13.3338 9.25962 13.5592V17.1568C9.25962 18.1574 9.90317 19.0458 10.8573 19.3623L12.415 19.8789C13.9279 20.3807 15.4904 19.2602 15.4904 17.6734V13.5592C15.4904 13.3338 15.589 13.1196 15.7606 12.9724L21.6895 7.88472C22.2041 7.44309 22.5 6.8004 22.5 6.12419V4.32484C22.5 3.04087 21.4539 2 20.1635 2H4.58654Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_83_21916"
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
                      result="effect1_dropShadow_83_21916"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_83_21916"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <FormControl className="intTurSelectTwo">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="intItems">
            {interNewsAll.map((item, index) => (
              <div
              onClick={() => {
                navigate(`/9/${index}`);
              }}
                className="intItem"
                style={{ backgroundImage: `url(${item.image.url})` }}
              >
                <div className="intItemAbout">
                  <h1 className="intAboutTitle">
                  {item.text.length > 60 ? `${item.text.slice(0, 60)}...` : item.text}
                  </h1>
                  <div className="intAboutCatCard">
                    <div className="intAboutCat">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#21D5EE" />
                      </svg>
                      <h4 className="intAboutSubCat">{item.subCategory.name}</h4>
                    </div>
                    <Rating
                      className="intAboutRating"
                      name="read-only"
                      value={item.rating}
                      readOnly
                    />
                  </div>
                  <div className="intAboutDataCard">
                    <div className="intAboutData">
                      <div className="intAboutDay">
                        <svg
                          width="13"
                          height="14"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.25001 10.9241C6.25001 10.7956 6.35485 10.6914 6.48416 10.6914H8.69444C8.82376 10.6914 8.92859 10.7956 8.92859 10.9241V11.3496C8.92859 11.4782 8.82376 11.5824 8.69444 11.5824H6.48416C6.35485 11.5824 6.25001 11.4782 6.25001 11.3496V10.9241Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M10.7143 9.14223C10.7143 9.0137 10.8191 8.9095 10.9485 8.9095H13.1587C13.288 8.9095 13.3929 9.0137 13.3929 9.14223V9.56772C13.3929 9.69626 13.288 9.80045 13.1587 9.80045H10.9485C10.8191 9.80045 10.7143 9.69626 10.7143 9.56772V9.14223Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M1.78572 7.36031C1.78572 7.23178 1.89056 7.12758 2.01987 7.12758H4.23015C4.35947 7.12758 4.4643 7.23178 4.4643 7.36031V7.78581C4.4643 7.91434 4.35947 8.01853 4.23015 8.01853H2.01987C1.89056 8.01853 1.78572 7.91434 1.78572 7.78581V7.36031Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M1.78572 9.14223C1.78572 9.0137 1.89056 8.9095 2.01987 8.9095H4.23015C4.35947 8.9095 4.4643 9.0137 4.4643 9.14223V9.56772C4.4643 9.69626 4.35947 9.80045 4.23015 9.80045H2.01987C1.89056 9.80045 1.78572 9.69626 1.78572 9.56772V9.14223Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M1.78572 10.9241C1.78572 10.7956 1.89056 10.6914 2.01987 10.6914H4.23015C4.35947 10.6914 4.4643 10.7956 4.4643 10.9241V11.3496C4.4643 11.4782 4.35947 11.5824 4.23015 11.5824H2.01987C1.89056 11.5824 1.78572 11.4782 1.78572 11.3496V10.9241Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M1.78572 12.706C1.78572 12.5775 1.89056 12.4733 2.01987 12.4733H4.23015C4.35947 12.4733 4.4643 12.5775 4.4643 12.706V13.1315C4.4643 13.26 4.35947 13.3642 4.23015 13.3642H2.01987C1.89056 13.3642 1.78572 13.26 1.78572 13.1315V12.706Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M6.25001 7.36031C6.25001 7.23178 6.35485 7.12758 6.48416 7.12758H8.69444C8.82376 7.12758 8.92859 7.23178 8.92859 7.36031V7.78581C8.92859 7.91434 8.82376 8.01853 8.69444 8.01853H6.48416C6.35485 8.01853 6.25001 7.91434 6.25001 7.78581V7.36031Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M6.25001 9.14223C6.25001 9.0137 6.35485 8.9095 6.48416 8.9095H8.69444C8.82376 8.9095 8.92859 9.0137 8.92859 9.14223V9.56772C8.92859 9.69626 8.82376 9.80045 8.69444 9.80045H6.48416C6.35485 9.80045 6.25001 9.69626 6.25001 9.56772V9.14223Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M6.25001 12.706C6.25001 12.5775 6.35485 12.4733 6.48416 12.4733H8.69444C8.82376 12.4733 8.92859 12.5775 8.92859 12.706V13.1315C8.92859 13.26 8.82376 13.3642 8.69444 13.3642H6.48416C6.35485 13.3642 6.25001 13.26 6.25001 13.1315V12.706Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M10.7143 7.36031C10.7143 7.23178 10.8191 7.12758 10.9485 7.12758H13.1587C13.288 7.12758 13.3929 7.23178 13.3929 7.36031V7.78581C13.3929 7.91434 13.288 8.01853 13.1587 8.01853H10.9485C10.8191 8.01853 10.7143 7.91434 10.7143 7.78581V7.36031Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M10.7143 10.9241C10.7143 10.7956 10.8191 10.6914 10.9485 10.6914H13.1587C13.288 10.6914 13.3929 10.7956 13.3929 10.9241V11.3496C13.3929 11.4782 13.288 11.5824 13.1587 11.5824H10.9485C10.8191 11.5824 10.7143 11.4782 10.7143 11.3496V10.9241Z"
                            fill="#C1C1C1"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.8571 3.44123H2.14286C1.36621 3.44123 0.731707 4.07026 0.731707 4.85224V13.8617C0.731707 14.6437 1.36621 15.2727 2.14286 15.2727H12.8571C13.6338 15.2727 14.2683 14.6437 14.2683 13.8617V4.85224C14.2683 4.07026 13.6338 3.44123 12.8571 3.44123ZM2.14286 2.71396C0.95939 2.71396 0 3.6713 0 4.85224V13.8617C0 15.0427 0.959391 16 2.14286 16H12.8571C14.0406 16 15 15.0427 15 13.8617V4.85224C15 3.6713 14.0406 2.71396 12.8571 2.71396H2.14286Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M10.1122 2.54546C9.98288 2.54546 9.87805 2.44126 9.87805 2.31273V0.232728C9.87805 0.104196 9.98288 0 10.1122 0H10.7415C10.8708 0 10.9756 0.104196 10.9756 0.232728V2.31273C10.9756 2.44126 10.8708 2.54546 10.7415 2.54546H10.1122Z"
                            fill="#C1C1C1"
                          />
                          <path
                            d="M10.1122 5.81819C9.98288 5.81819 9.87805 5.71399 9.87805 5.58546V3.50546C9.87805 3.37693 9.98288 3.27273 10.1122 3.27273H10.7415C10.8708 3.27273 10.9756 3.37693 10.9756 3.50546V5.58546C10.9756 5.71399 10.8708 5.81819 10.7415 5.81819H10.1122Z"
                            fill="#C1C1C1"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.25854 2.54546C4.12922 2.54546 4.02439 2.44126 4.02439 2.31273V0.232728C4.02439 0.104196 4.12922 1.47595e-08 4.25854 1.47595e-08H4.8878C5.01712 1.47595e-08 5.12195 0.104196 5.12195 0.232728V2.31273C5.12195 2.44126 5.01712 2.54546 4.8878 2.54546H4.25854Z"
                            fill="#C1C1C1"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.25854 5.81819C4.12922 5.81819 4.02439 5.71399 4.02439 5.58546V3.50546C4.02439 3.37693 4.12922 3.27273 4.25854 3.27273H4.8878C5.01712 3.27273 5.12195 3.37693 5.12195 3.50546V5.58546C5.12195 5.71399 5.01712 5.81819 4.8878 5.81819H4.25854Z"
                            fill="#C1C1C1"
                          />
                        </svg>
                        <span>{item.publishedAt.slice(0, 10)}</span>
                      </div>
                      <div className="intAboutDay">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5 0.909091C2.74065 0.909091 0.909091 2.74065 0.909091 5C0.909091 7.25935 2.74065 9.09091 5 9.09091C7.25935 9.09091 9.09091 7.25935 9.09091 5C9.09091 2.74065 7.25935 0.909091 5 0.909091ZM0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM5 1.81818C5.25104 1.81818 5.45455 2.02169 5.45455 2.27273V4.71908L7.02146 5.50253C7.246 5.6148 7.33701 5.88783 7.22474 6.11237C7.11247 6.33691 6.83944 6.42792 6.6149 6.31565L4.79672 5.40656C4.64273 5.32956 4.54545 5.17217 4.54545 5V2.27273C4.54545 2.02169 4.74896 1.81818 5 1.81818Z"
                            fill="#C1C1C1"
                          />
                        </svg>
                        <span>{item.publishedAt.slice(11, 16)}</span>
                      </div>
                    </div>
                    <div className="intAboutLikeCard">
                      <div className="intAboutLike">
                        <span>{item.likes}</span>
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
                        <span>Like</span>
                      </div>
                      <div className="intAboutCom">
                        <span>{item.comments}</span>
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
                        <span>Izohlar</span>
                      </div>
                      <div className="intAboutUl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
