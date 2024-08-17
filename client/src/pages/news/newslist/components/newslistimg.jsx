import React from "react";

import "../style.css";

export default function NewsListImage({ src, alt }) {
  return (
    <div className="news-list__list__item__image__wrapper">  
      <img src={src} alt={alt} className="news-list__list__item__image" /> 
    </div> 
  );
}