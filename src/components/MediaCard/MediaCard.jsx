import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MediaContainer, MediaImage, MediaSummary, MediaTitle } from './theme';
import constants from '../../config/constants';

const MediaCard = ({ id, image, name, summary = '' }) => {
  const navigate = useNavigate();
  const [isSummaryVisible, setSummaryVisibility] = React.useState(false);

  const onMouseEnter = () => {
    setSummaryVisibility(true);
  };
  const onMouseLeave = () => {
    setSummaryVisibility(false)
  };

  const goToContent = () => {
    navigate(`${constants.paths.video}/${id}`);
  }

  return (
    <MediaContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchMove={onMouseEnter}
      onTouchEnd={onMouseLeave}
      onClick={goToContent}
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
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  summary: PropTypes.string
}

export default MediaCard;
