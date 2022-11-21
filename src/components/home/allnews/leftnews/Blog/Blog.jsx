import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Blog.css";
import { Grid, Pagination, Scrollbar } from "swiper";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const navigate = useNavigate();
  const [blogAllItem, setBlogAllItem] = useState([]);

  useEffect(() => {
    const blogFunc = async () => {
      const blogItem = await axios.get('https://185.196.213.14:3001/news/byType?type=BLOG&page=1&limit=25')
      setBlogAllItem(blogItem.data.data)
    }

    blogFunc()
  },[])
  return (
    <div className="swapperIkki">
      <div className="swapperIkkiTitleCard">
        <h1 className="swapperIkkiTitle">BLOGLAR</h1>
        <div
          onClick={() => {
            navigate(`/category/BLOG`);
          }}
          className="swIkkiBarchaUrl"
        >
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
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        direction={"horizontal"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[Scrollbar, Grid, Pagination]}
        className="mySwiper"
      >
        {blogAllItem.map((item, index) => (
          <SwiperSlide>
            <div onClick={() => {
                navigate(`/BLOG/${index}`);
              }}>
              <div className="swIKkiImgCard">
                <div
                  className="swIkkItemBg"
                  style={{ backgroundImage: `url(${item.image.url})` }}
                ></div>
                <p className="swIKkiImgCardText">
                {item.text.length > 80 ? `${item.text.slice(0, 60)}...` : item.text}
                </p>
              </div>
              <div className="swIKkiAboutCard">
                <div className="swIKkiAboutCardTime">
                  <span>
                    <svg
                      width="15"
                      height="16"
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
                  </span>
                  <p>{item.publishedAt.slice(0, 10)}</p>
                  <span>
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
                  </span>
                  <p>{item.publishedAt.slice(11, 16)}</p>
                </div>
                <div className="swIKkiAboutCardLike">
                  <span>
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.55838 0.0617675C6.23881 -0.0390265 5.89031 -0.0160012 5.58707 0.127466C5.25261 0.2857 4.99741 0.579826 4.90166 0.942211L4.61095 2.04252C4.5288 2.35347 4.40901 2.65409 4.25421 2.93861C4.04732 3.31888 3.71626 3.64248 3.31625 3.9809L2.43703 4.72478C2.06652 5.03825 1.86939 5.51041 1.91202 5.9945L2.40834 11.6301C2.47722 12.4122 3.14008 13 3.91999 13H6.76081C9.11109 13 11.1509 11.3894 11.5461 9.1457L11.9772 6.69785C12.1406 5.77021 11.4141 4.94052 10.4824 4.94052H7.31614L7.31378 4.94043C7.31273 4.94034 7.31153 4.9401 7.31153 4.9401L7.30965 4.93947L7.30793 4.9384L7.71232 2.51515C7.78978 2.05095 7.76764 1.57596 7.64738 1.12079C7.51649 0.625357 7.13212 0.24273 6.64697 0.0897099L6.55838 0.0617675Z"
                        fill="#C1C1C1"
                      />
                      <path
                        d="M0.998072 5.39666C0.974595 5.13008 0.745393 4.92925 0.478046 4.941C0.2107 4.95275 0 5.17291 0 5.44052V12.2076C0 12.6533 0.365173 13 0.797431 13C1.25603 13 1.63342 12.6108 1.59183 12.1386L0.998072 5.39666Z"
                        fill="#C1C1C1"
                      />
                    </svg>
                  </span>
                  <p>{item.likes}</p>
                </div>
                <div className="swIKkiAboutCardComment">
                  <span>
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
                        d="M5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10H8.31446C8.55632 10 8.7649 10 8.93558 9.98347C9.11634 9.96593 9.29469 9.92704 9.46004 9.82314C9.60681 9.73092 9.73092 9.60681 9.82314 9.46004C9.92704 9.29469 9.96593 9.11634 9.98347 8.93558C10 8.7649 10 8.55632 10 8.31446V5C10 2.23858 7.76142 0 5 0ZM2.30769 4.23077C2.30769 4.01835 2.47989 3.84615 2.69231 3.84615H5.38461C5.59703 3.84615 5.76923 4.01835 5.76923 4.23077C5.76923 4.44319 5.59703 4.61538 5.38461 4.61538H2.69231C2.47989 4.61538 2.30769 4.44319 2.30769 4.23077ZM2.30769 5.76923C2.30769 5.55681 2.47989 5.38461 2.69231 5.38461H7.30769C7.52011 5.38461 7.69231 5.55681 7.69231 5.76923C7.69231 5.98165 7.52011 6.15385 7.30769 6.15385H2.69231C2.47989 6.15385 2.30769 5.98165 2.30769 5.76923Z"
                        fill="#C1C1C1"
                      />
                    </svg>
                  </span>
                  <p>{item.likes}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
