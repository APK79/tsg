import React, { useContext } from "react";
import { SliderContext } from "../../Slider.jsx";
import Dot from "./Dot.jsx";
import { useResize } from "../../../../hooks/useResize/useResize.js";

import "../../style.css";

export default function Dots() {
  let { slidesCount, slides } = useContext(SliderContext);
  const { isScreenLg } = useResize();

  const renderDots = () => {
    const dots = [];
    if ( !isScreenLg ) slides = 1;
    if ( slides > 1 ) slidesCount = slidesCount - (slides-1)
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}