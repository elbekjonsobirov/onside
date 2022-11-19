import React, {useEffect, useState} from "react";
import "./Newsitem.css";
import Newsitemabout from "../newsallitem/newsItemAbout/Newsitemabout";
import Newsmaqolamuallif from "../newsallitem/newsmaqolamuallif/Newsmaqolamuallif";
import Newsmavoid from "../newsallitem/newsmavoid/Newsmavoid";
import axios from "axios";
// import Newsitemcom from "../newsallitem/newsitemComment/Newsitemcom"

export default function NewsItemLeft(props) {
  let newsItem = props.newsItem
  return (
    <div className="newItemLeft">
      <Newsitemabout newsItem={newsItem}/>
      <Newsmaqolamuallif newsItem={newsItem}/>
      {/* <Newsitemcom/> */}
      <Newsmavoid/>
    </div>
  );
}
