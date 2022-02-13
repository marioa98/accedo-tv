import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import viewports from "../../../config/viewports";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './arrow.scss';

const Arrow = ({ currentSlide, slideCount, direction, onClick }) => {
  const [inView, setView] = useState();
  const [slidesInView, setSlidesInView] = useState();

  const slidesInViewHandler = () => {
    const { innerWidth } = window;
    const { large, medium, small } = viewports;

    if (innerWidth > large) {
      setSlidesInView(5)
    } else if (innerWidth <= large && innerWidth > medium) {
      setSlidesInView(3)
    } else if (innerWidth <= medium && innerWidth > small){
      setSlidesInView(2)
    } else {
      setSlidesInView(1);
    }
  };

  useEffect(() => {
    setView(() => {
      if (direction === 'prev') {
        return currentSlide ? true : false;
      }
  
      return currentSlide < slideCount - slidesInView;
    })
  }, [direction, currentSlide, slideCount, slidesInView])

  useEffect(() => {
    slidesInViewHandler();
    window.addEventListener('resize', slidesInViewHandler);

    return () => {
      window.removeEventListener('resize', slidesInViewHandler);
    }
  }, [])

  return (
    <button
      onClick={onClick}
      className={classNames('slick-arrow', `slick-${direction}`, {
        'slick-disabled': !inView
      })}
      aria-hidden="true"
      type="button"
    >
      {direction === 'prev' ? <>&#10094;</> : <>&#10095;</>}
    </button>
  );
}

Arrow.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  direction: PropTypes.oneOf(['prev', 'next']),
  onClick: PropTypes.func
}

export default Arrow;
