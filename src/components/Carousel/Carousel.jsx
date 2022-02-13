import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MediaCard from '../MediaCard/MediaCard';
import viewports from '../../config/viewports';
import Arrow from './Arrow/Arrow';

const Header = styled.h1`
  font-size: 36px;
  margin-left: 45px;
`;

const baseSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
}

const Carousel = ({ items, options: customOptions, title }) => {
  const options = {
    ...baseSettings,
    responsive: [
      {
        breakpoint: viewports.large,
        settings: {
          ...baseSettings,
          slidesToShow: 3
        }
      },
      {
        breakpoint: viewports.medium,
        settings: {
          ...baseSettings,
          slidesToShow: 2
        }
      },
      {
        breakpoint: viewports.small,
        settings: {
          ...baseSettings,
          slidesToShow: 1
        }
      }
    ],
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />
  };

  return (
    <>
      <Header>{title}</Header>
      <Slider {...({ ...options, ...customOptions })}>
        {items?.map(({id, ...item}) => (
          <div key={id}>
            <MediaCard id={id} {...item} />
          </div>
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