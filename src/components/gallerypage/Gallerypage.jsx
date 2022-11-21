import React, {useEffect, useState} from "react";
import "./Gallerypage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Gallerypage() {
  const navigate = useNavigate();
  const [galleryItem, setGalleryItem] = useState([])
  const galleryItemFunc = async () => {
    const galleryItemApi = await axios.get(`https://185.196.213.14:3001/news/byType?type=PHOTO&page=1&limit=25`)
    setGalleryItem(galleryItemApi.data.data);
  }
  
  useEffect(() => {
    galleryItemFunc()
  },[])

  return (
    <div className="galleryPage">
      <div className="galleryPageCard">
        <div className="galleryPageAllItem">
          {galleryItem.map((item, index) => (
          <div
          onClick={() => {
            navigate(`/8/${index}`);
          }}
            className="galleryPageItem"
            style={{ backgroundImage: `url(${item.image.url})` }}
          >
            <h1 className="galleryPageItemCard">
              {item.text}
            </h1>
            <div className="galleryPageItemUrl">
              <svg
                width="30"
                height="30"
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
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
