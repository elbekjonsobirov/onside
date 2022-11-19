import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div className="searchPage">
      <div className="searchCardLink">
        <Link to="/">BOSH SAHIFA</Link>
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
        <Link to={window.location.pathname}>QIDIRUV NATIJALARI</Link>
      </div>
      <div className="searchCard">
        <div className="searchALLItem">
          <div className="searchItem">
            <h1 className="searchItemTitle">
              2022 yilgi Qatarsacsaccscsacsacsacascsacsacsac jahon chempionatiga
              kafolat bergan davlatlar
            </h1>
            <div className="searchItemAbout">
              <h4 className="searchItemCat">Chempinlar ligasi</h4>
              <h6 className="searchItemdata">
                <span>20.20.2022</span>
                <span>20:20</span>
              </h6>
            </div>
          </div>
          <div className="searchItem">
            <h1 className="searchItemTitle">
              2022 yilgi Qatar jahon chempionatiga kafolat bergan davlatlar
            </h1>
            <div className="searchItemAbout">
              <h4 className="searchItemCat">Chempinlar ligasi</h4>
              <h6 className="searchItemdata">
                <span>20.20.2022</span>
                <span>20:20</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* ritext */}
    </div>
  );
}
