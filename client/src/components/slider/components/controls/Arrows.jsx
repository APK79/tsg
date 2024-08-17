import React, { useContext } from "react";
import { SliderContext } from "../../Slider.jsx";

import "../../style.css";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)}><span>&larr;</span></div>
      <div className="arrow right" onClick={() => changeSlide(1)}><span>&rarr;</span></div>
    </div>
  );
}