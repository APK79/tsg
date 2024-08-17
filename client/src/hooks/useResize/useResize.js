import { useState, useEffect } from 'react';
import { SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL, SCREEN_XXL } from './breakpoints';

export const useResize = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
        setClientWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isScreenSm: clientWidth >= SCREEN_SM,
    isScreenMd: clientWidth >= SCREEN_MD,
    isScreenLg: clientWidth >= SCREEN_LG,
    isScreenXl: clientWidth >= SCREEN_XL,
    isScreenXxl: clientWidth >= SCREEN_XXL,
  };
};
