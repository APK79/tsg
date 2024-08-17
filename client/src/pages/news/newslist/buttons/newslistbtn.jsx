import React from "react";
import { NavLink } from "react-router-dom";

import "../style.css";

export default function NewsListButton (id) {
  return (
    <div className="news__list__item__btn__wrapper">  
      <NavLink to={`news/${id.id}`} className="news__list__btn"> Далее </NavLink>
    </div> 
  );
}