import React from 'react';
import PropTypes from 'prop-types';
import { MediaContainer, MediaImage, MediaSummary, MediaTitle } from './theme';

const MediaCard = ({ image, name, summary = '' }) => {
  const [isSummaryVisible, setSummaryVisibility] = React.useState(false);

  const onMouseEnter = () => {
    setSummaryVisibility(true);
  };
  const onMouseLeave = () => {
    setSummaryVisibility(false)
  };

  return (
    <MediaContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchMove={onMouseEnter}
      onTouchEnd={onMouseLeave}
    >
      <MediaImage
        image={image}
      >
        {isSummaryVisible && <MediaSummary>{summary}</MediaSummary>}
      </MediaImage>
      <MediaTitle>{name}</MediaTitle>
    </MediaContainer>
  )
}

MediaCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  summary: PropTypes.string
}

export default MediaCard;
