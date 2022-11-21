import React, { useEffect, useState } from "react";
import "./App.css";
import Allnews from "./components/home/allnews/Allnews";
import ClubsStatik from "./components/home/clubsStatic/ClubsStatik";
import GalleryCard from "./components/home/gallerycard/GalleryCard";
import Yangiliklar from "./components/yangiliklar/Yangiliklar";
import { Route, Routes } from "react-router-dom";
// import Mynews from "./components/home/mynews/Mynews";
import Footer from "./components/footer/Footer";
// import Youtubelist from "./components/home/youtubelist/Youtebelist";
import Newspage from "./components/newspage/Newspage";
import Loading from "./components/loading/Loading";
import Users from "./components/users/Users";
import homeSHadow from "./components/Imgs/shadow.png";
import { Helmet } from "react-helmet-async";
import Interviewall from "./components/interviewall/Interviewall";
import Search from "./components/search/Search";
import Gallerypage from "./components/gallerypage/Gallerypage";
import axios from "axios";
import Championatlogo from "./components/championatlogo/Championatlogo";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  function NavActive(id) {
    const UlActiveArr = document.querySelector(".UlActive"),
      UlActive = UlActiveArr.querySelectorAll("li");
    UlActive.forEach((item) => item.classList.remove("navActive"));
    if (id === "/category/4") {
      UlActive[4].classList.add("navActive");
    } else if (id === "/category/2") {
      UlActive[2].classList.add("navActive");
    } else if (id === "/gallery") {
      UlActive[6].classList.add("navActive");
    } else if (id === "/category/1") {
      UlActive[1].classList.add("navActive");
    }
    else {
      UlActive.forEach((item) => item.classList.remove("navActive"));
    }
  }

  // Loader function

  const [load, setLoad] = useState(false);

  window.addEventListener("click", function (event) {
    // let itemId = event.target.id;
    // let itemClass = event.target;
    // Top Match
    // let btnArr = document.querySelectorAll(".tranLink");
    // if (
    //   itemClass.classList == "matchTransSVG" ||
    //   itemClass.classList == "matchSharhBtn"
    // ) {
    //   btnArr.forEach((item) => {
    //     item.classList.remove("tranLinkActive");
    //   });
    //   btnArr[itemId].classList.add("tranLinkActive");
    // } else {
    //   btnArr.forEach((item) => {
    //     item.classList.remove("tranLinkActive");
    //   });
    // }
    // Mark match
    // let marBtnsArr = document.querySelectorAll(".markMatchTranCard");
    // if (
    //   itemClass.classList == "markMatchSharhBtn" ||
    //   itemClass.classList == "MarMatchSvgId"
    // ) {
    //   marBtnsArr.forEach((item) => {
    //     item.classList.remove("martranBtnActive");
    //   });
    //   marBtnsArr[itemId].classList.add("martranBtnActive");
    // } else {
    //   marBtnsArr.forEach((item) => {
    //     item.classList.remove("martranBtnActive");
    //   });
    // }
    // User profilessettings
    // let profileMenu = document.querySelector(".userProfeditor");
    // if (itemClass.classList == "bdtonclickDiv") {
    //   profileMenu.classList.toggle("userProfRemove");
    // } else {
    //   profileMenu.classList.add("userProfRemove");
    // }
    // Navbar Active
  });

  const [clubLogo, setClubLogo] = useState([]);

  // useEffect(() => {
  //   const loadUsers = async () => {
  //     setLoad(true);
  //     const response = await axios.get(
  //       "http://185.196.213.14:3001/news/byType?type=COMMON&page=1&limit=25"
  //     );
  //     const clubApi = await axios.get('http://185.196.213.14:3001/clubs')
  //     setClubLogo(clubApi.data);
  //     setLoad(false);
  //   };

  //   loadUsers();
  //   NavActive(window.location.pathname)
  // }, [window.location.pathname]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoad(true);
      const response = await axios({
        method: "get",
        url: "http://185.196.213.14:3001/news/byType?type=COMMON&page=1&limit=25",
        withCredentials: false,
      });
      const clubApi = await axios({
        url: "http://185.196.213.14:3001/clubs",
        method: "get",
        withCredentials: false,
      });
      setClubLogo(clubApi.data);
      setLoad(false);
    };

    loadUsers();
    NavActive(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="homeContainer">
      <Helmet>
        <meta name="description" content="Futbol yangiliklari" />
      </Helmet>
      <div className="head_club">
        <div className="club_share">
          <h4>KLUB SAHIFALARI</h4>
        </div>
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
            d="M10 20C15.5229 20 20 15.5228 20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM12.1347 3.78382C11.8054 4.17744 11.625 4.67429 11.6251 5.18747C11.6249 5.41062 11.6588 5.63249 11.7257 5.84538L5.84754 8.57499C5.55656 8.23592 5.16869 7.99408 4.73611 7.88202C4.30355 7.76995 3.84703 7.79303 3.42798 7.94816C3.00893 8.10329 2.64744 8.38302 2.39214 8.74972C2.13685 9.11642 2 9.5525 2 9.99929C2 10.4461 2.13685 10.8822 2.39214 11.2489C2.64744 11.6156 3.00893 11.8953 3.42798 12.0504C3.84703 12.2056 4.30355 12.2286 4.73611 12.1166C5.16869 12.0045 5.55656 11.7627 5.84754 11.4236L11.7257 14.1532C11.5622 14.6699 11.5965 15.2289 11.8217 15.7218C12.0469 16.2147 12.4472 16.6064 12.9448 16.8211C13.4424 17.0357 14.0021 17.058 14.5152 16.8837C15.0284 16.7093 15.4585 16.3506 15.7223 15.8772C15.986 15.4038 16.0646 14.8493 15.9428 14.3213C15.821 13.7932 15.5075 13.3292 15.063 13.0191C14.6186 12.709 14.0748 12.5749 13.5371 12.6429C12.9994 12.7108 12.506 12.9759 12.1527 13.3868L6.27454 10.6572C6.40967 10.229 6.40967 9.76959 6.27454 9.34139L12.1527 6.61177C12.487 7.00117 12.9476 7.26064 13.4538 7.34479C13.9601 7.42893 14.4799 7.3324 14.9222 7.07208C15.3645 6.81176 15.7012 6.40422 15.8733 5.92077C16.0454 5.43732 16.0421 4.90874 15.8638 4.42751C15.6855 3.94629 15.3437 3.54306 14.8982 3.28837C14.4526 3.03369 13.9316 2.94377 13.4265 3.03434C12.9213 3.12491 12.464 3.39021 12.1347 3.78382Z"
            fill="white"
          />
        </svg>
        <div className="club_logos">
          {clubLogo.map((item, index) => (
            <a href={item.link} key={index}>
              <img src={item.image.url} alt="logo" />
            </a>
          ))}
        </div>
      </div>
      <div className="shadow_img">
        <img className="shadow_img" src={homeSHadow} />
      </div>
      <Users />
      <div class="header-menu">
        <nav>
          <ul className="UlActive">
            <li class="main left">
              <span
                onClick={() => {
                  navigate(`/category/0`);
                }}
              >
                o‘yin markazi
              </span>
            </li>
            <li
              class="main"
              onClick={() => {
                navigate(`/category/1`);
              }}
            >
              <span>Futbol Yangiliklari</span>
            </li>
            <li
              class="main"
              onClick={() => {
                navigate(`/category/2`);
              }}
            >
              <span>bloglar</span>
            </li>
            <li
              class="main"
              onClick={() => {
                navigate(`/category/3`);
              }}
            >
              <span>Qatar 2022</span>
            </li>
            <li
              class="main"
              onClick={() => {
                navigate(`/category/4`);
              }}
            >
              <span>Sport Yangiliklari</span>
            </li>
            <li
              class="main"
              onClick={() => {
                navigate(`/category/5`);
              }}
            >
              <span> statistika</span>
            </li>
            <li
              class="right"
              onClick={() => {
                navigate(`/gallery`);
              }}
            >
              <span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.45435 9.5L0.454346 0.839746L10.4543 0.839747L5.45435 9.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="homelogInCard"></div>
      <div className="homeCard">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ClubsStatik />
                <Allnews />
                <Championatlogo />
                {/* <Youtubelist /> */}
                <GalleryCard />
                {/* <Mynews /> */}
              </>
            }
          />
          <Route path="/category/:id/" element={<Yangiliklar />} />
          <Route path="/:categoryId/:id" element={<Newspage />} />
          <Route path="/category/interview" element={<Interviewall />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/gallery" element={<Gallerypage />} />
        </Routes>
      </div>

      <Footer />
      <Loading load={load} />
    </div>
  );
}

export default App;
