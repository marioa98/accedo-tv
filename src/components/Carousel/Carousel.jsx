import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaCard from '../MediaCard/MediaCard';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const options = {
  dots: true,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Header = styled.h1`
  font-size: 36px;
  margin-left: 45px;
`;

const Carousel = ({ items, options: customOptions, title }) => {

  return (
    <>
      <Header>{title}</Header>
      <Slider {...({ ...options, ...customOptions })}>
        {items?.map(({ name, image, summary }) => (
          <>
            <MediaCard
              image={image}
              summary={summary}
              name={name}
            />
          </>
        ))}
      </Slider>
    </>
  )
};

Carousel.propTypes = {
  items: PropTypes.array,
  options: PropTypes.object,
  title: PropTypes.string
}

export default Carousel;