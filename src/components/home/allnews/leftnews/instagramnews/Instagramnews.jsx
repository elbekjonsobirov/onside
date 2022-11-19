import React, { useState } from "react";
import "./Instagramnews.css";
import Stories from "react-insta-stories";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// Swapper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

export default function Instagramnews() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [storiesItem, setStoriesItem] = useState([]);

  const handleOpen = (index) => {
    let btnsArr = document.querySelector(".insSwItem");
    let btns = btnsArr.querySelectorAll(".button");
    btns[index].classList.remove("insBtn");

    // storie item
    setStoriesItem(testApi[index].story);

    setOpen(true);
  };
  const [testApi] = useState([
    {
      story: [
        {
          url: "https://picsum.photos/1080/1920",
          type: "image",
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
          link: "https://youtube.com",
        },
        {
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          type: "video",
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
          link: "https://youtube.com",
        },
        {
          url: "https://picsum.photos/1080/1920",
          type: "image",
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
          link: "https://youtube.com",
        },
      ],
    },
    {
      story: [
        {
          url: "https://i.redd.it/ldopd5dueql11.jpg",
          type: "image",
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
          link: "https://youtube.com",
        },
        {
          url: "https://wallpapercave.com/wp/wp9464930.jpg",
          type: "image",
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
          link: "https://youtube.com",
        },
      ],
    },
  ]);
  const [test] = useState(
    "Feliks dubl bilan Atletiko Real Betis ustidan g'alaba qo svdnkjdvndf skljvndskvjns dvjksdv bbfbcxbxcbxcbnkjvdnsd vkjnsdvsdjk dsnzondi..."
  );

  // stories JS code

  return (
    <div className="insNews">
      <div className="insNewsTitleCard">
        <h1 className="insNewsTitle">FUTBOL FAKTLAR</h1>
        <div className="instStoriesCard">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper insSwItem"
          >
            {testApi.map((item, index) => (
              <SwiperSlide>
                <Button
                  className="button insBtn"
                  style={{
                    backgroundImage: `url(${item.story[0].url})`,
                  }}
                  onClick={() => handleOpen(index)}
                >
                  <div className="instaBgColor"></div>
                  <div className="instaAlltext">
                    <h1 className="istItemTitle">
                      {test.length > 80 ? `${test.slice(0, 60)}...` : test}
                    </h1>
                  </div>
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="insModalBox">
            {/* <ReactInstaStories
              className="insStoriesItem"
              stories={storiesItem}
              defaultInterval={7000}
              width={"100%"}
              height={"100%"}
            /> */}
            <Stories
              loop
              keyboardNavigation
              defaultInterval={7000}
              stories={storiesItem}
              width={"100%"}
              height={"100%"}
              progressAtBottom={"bcascbsahjcbas"}
              onStoryEnd={(s, st) => console.log("story ended", s, st)}
              onAllStoriesEnd={(s, st) =>
                console.log("all stories ended", s, st)
              }
              onStoryStart={(s, st) => console.log("story started", s, st)}
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
}
