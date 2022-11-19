import React, { useState } from "react";
import "./Users.css";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  // const [inputVal, setInputVal] = useState("")
  // window.addEventListener("keydown", function(event) {
  //   console.log(inputVal);
  // })

  return (
    <div className="userProfile">
      <div className="searchcard">
        <input type="search" name="" id="" placeholder="Saytdan qidirish" />
        <div
          onClick={() => {
            navigate(`/search/post`);
          }}
          className="searchIcon"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L9.59445 9.59444M11.0741 6.03704C11.0741 8.81892 8.81892 11.0741 6.03704 11.0741C3.25516 11.0741 1 8.81892 1 6.03704C1 3.25516 3.25516 1 6.03704 1C8.81892 1 11.0741 3.25516 11.0741 6.03704Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
