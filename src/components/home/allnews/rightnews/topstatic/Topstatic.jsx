import React from "react";
import RightIcon from "../../../svg/Vector (Stroke) (3).svg";
import topLayClub from "../../../../Imgs/Vector (6).png";
import topPlayImg from '../../../../Imgs/image 45.png'
import "./Topstatic.css";

export default function Topstatic() {
  return (
    <div className="topStaticPage">
      <div className="topTitleCard">
        <h1 className="topTitle">To‘p urarlar jadvali</h1>
        <a href="/" className="topBarchaUrl">
          Batafsil
          <img src={RightIcon} alt="" />
        </a>
      </div>
      <div className="topPlayCard">
        <div className="topPlay">
          <img className="topPlayImg" src={topPlayImg} alt="" />
          <h3 className="topPlayName">Cristiano Ronaldo</h3>
          <img src={topLayClub} alt="" className="topPlayClub" />
          <h4 className="topPlayVal">28</h4>
        </div>
        <div className="topPlay">
          <img className="topPlayImg" src={topPlayImg} alt="" />
          <h3 className="topPlayName">Cristiano Ronaldo</h3>
          <img src={topLayClub} alt="" className="topPlayClub" />
          <h4 className="topPlayVal">28</h4>
        </div>
        <div className="topPlay">
          <img className="topPlayImg" src={topPlayImg} alt="" />
          <h3 className="topPlayName">Cristiano Ronaldo</h3>
          <img src={topLayClub} alt="" className="topPlayClub" />
          <h4 className="topPlayVal">28</h4>
        </div>
        <div className="topPlay">
          <img className="topPlayImg" src={topPlayImg} alt="" />
          <h3 className="topPlayName">Cristiano Ronaldo</h3>
          <img src={topLayClub} alt="" className="topPlayClub" />
          <h4 className="topPlayVal">28</h4>
        </div>
        <div className="topPlay">
          <img className="topPlayImg" src={topPlayImg} alt="" />
          <h3 className="topPlayName">Cristiano Ronaldo</h3>
          <img src={topLayClub} alt="" className="topPlayClub" />
          <h4 className="topPlayVal">28</h4>
        </div>
      </div>
    </div>
  );
}
