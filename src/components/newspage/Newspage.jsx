import React, { useState, useEffect } from "react";
import Newsallitem from "./newsallitem/Newsallitem";
import NewsItemLeft from "./newsfullitem/NewsItem";
import "./Newspage.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Newspage() {
  window.scrollTo(0, 0);
  const { categoryId, id } = useParams();
  const [newsUrlName, setNewsUrlName] = useState("");
  const { newsPageUrl } = window.location.href;

  const [newsItem, setNewsItem] = useState([]);

  useEffect(() => {

    if (categoryId === 'BLOG') {
      setNewsUrlName("bloglar");
    } else if (categoryId === 'COMMON') {
      setNewsUrlName("So‘ngi yangiliklar");
    } else if (categoryId === 'SPORT') {
      setNewsUrlName("sport yangiliklari");
    } else if (categoryId === 'PHOTO') {
      setNewsUrlName("Galeriya");
    } else if (categoryId === 'INTERVIEW') {
      setNewsUrlName("Interviyular");
    }
    axios
      .get(
        `https://onside-sport.uz/api/news/byType?type=${categoryId}&page=1&limit=25`
      )
      .then((res) =>setNewsItem(res.data.data[id]));
  }, [categoryId, id]);

  return (
    <div className="newsPage">
      <div className="newsItemUrlCard">
        <Link to="/" className="newsItemUrl">
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
        <Link to={newsPageUrl} className="newsItemUrl">
          {newsUrlName}
        </Link>
      </div>
      <div className="newsPages">
        <NewsItemLeft newsItem={newsItem} />
        <Newsallitem />
      </div>
    </div>
  );
}
