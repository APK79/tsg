import React, { useEffect, useState, createContext } from 'react';
import PropTypes from "prop-types";
import images from "../../data/gallery.json";
import "./style.css";

import Arrows from "./components/controls/Arrows.jsx";
import Dots from "./components/controls/Dots.jsx";

import SlidesList from "./components/SlidesList.jsx";
import { useResize } from "../../hooks/useResize/useResize.js";

export const SliderContext = createContext();


const Slider = ({ slides, width, height, autoPlay, autoPlayTime }) => {

  const [items, setItems] = useState(images);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

    /*   useEffect(() => {
    const loadData = async () => {
      const images = await getImages();
      setItems(images);
    };
    loadData();
  }, []);*/

  const { isScreenLg } = useResize();

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    let getResizeCounter = ( isScreenLg ) ? slides : 1 ;
    if (slide + direction < 0) {
      slideNumber = items.length - getResizeCounter;
    }else if(slide + direction > items.length - getResizeCounter){
      slideNumber = 0;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); 


  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
          slides,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.number,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  slides: 3,
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};

  export default Slider;