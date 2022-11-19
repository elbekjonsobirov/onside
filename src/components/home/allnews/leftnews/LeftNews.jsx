import React from "react";
import Blog from "./Blog/Blog";
import Instagramnews from "./instagramnews/Instagramnews";
import Interview from "./Interview/Interview";
import "./Leftnews.css";
// import MatchCenter from "./MatchCenter/MatchCenter";
import Slider from "./Slider/Slider";
import Sportsnews from "./Sportsnews/Sportsnews";

export default function LeftNews() {
  return (
    <div className="leftNewsPage">
      <Slider />
      <Blog />
      <Sportsnews />
      <Interview />
      <Instagramnews />
      {/* <MatchCenter /> */}
    </div>
  );
}
