import React, { useState, useEffect } from "react";
import RightIcon from "../svg/Vector (Stroke) (3).svg";
import "./GalleryCard.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function GalleryCard() {
  const navigate = useNavigate();
  const [galleryNewsAll, setGalleryNewsAll] = useState([])

  useEffect(() => {
    const galleryFunc = async () => {
      const galleryItem = await axios.get('https://185.196.213.14:3001/news/byType?type=PHOTO&page=1&limit=25')
      setGalleryNewsAll(galleryItem.data.data);
    }

    galleryFunc()
  },[])

  return (
    <div className="galleryCard">
      <div className="galleryTitleCard">
        <h1 className="galleryTitle">Foto yangiliklar</h1>
        <Link to="/gallery">
          Batafsil
          <img src={RightIcon} alt="" />
        </Link>
      </div>
      <div className="galleryItemCard">
        {galleryNewsAll.map((item, index) => (
          <div
            onClick={() => {
              navigate(`/PHOTO/${index}`);
            }}
            className="galleryitem"
            key={index}
            style={{backgroundImage: `url(${item.image.url})`}}
          >
            <div className="galleryItemAbout">
              <h2 className="galleryItemTitle">
                {item.text.length > 80 ? `${item.text.slice(0, 80)}...` : item.text}
              </h2>
            </div>
            <div className="galleryUrl">
              <svg
                className="urlLinkImg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7573 9.24266C14.3749 10.8603 14.3749 13.4829 12.7573 15.1005L8.07107 19.7868C6.45346 21.4044 3.83081 21.4044 2.2132 19.7868C0.595599 18.1692 0.595599 15.5465 2.2132 13.9289L4.55636 11.5858M9.24262 12.7574C7.62501 11.1398 7.62501 8.5171 9.24262 6.8995L13.9289 2.2132C15.5465 0.595599 18.1692 0.595599 19.7868 2.2132C21.4044 3.83081 21.4044 6.45344 19.7868 8.07105L17.4436 10.4142"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Batafsil
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
