import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MetadataContainer from '../../views/Player/theme/MetadataContainer';

const CONTROLS_TIMEOUT = 3000;

const PlayerMetadata = ({ media }) => {
  const containerRef = useRef();
  const timeout = useRef();

  const showControls = () => {
    if (containerRef.current) {
      containerRef.current.style.display = 'block';
    }
  };

  const hideControls = () => {
    if (containerRef.current) {
      containerRef.current.style.display = 'none';
    }
  };

  const toggleContainer = () => {
    clearTimeout(timeout.current);
    showControls();
    timeout.current = setTimeout(hideControls, CONTROLS_TIMEOUT);
  }


  const getMetadata = useCallback(() => {
    if (!media?.season || !media?.number) {
      return;
    }

    const { season: seasonNumber, number: episodeNumber } = media;
    return `Season ${seasonNumber} | Episode ${episodeNumber}`
  }, [media]);

  const metadata = getMetadata()

  useEffect(() => {
    document.addEventListener('keydown', toggleContainer)
    document.addEventListener('mousemove', toggleContainer);
    document.addEventListener('touchstart', toggleContainer);
    return () => {
      document.removeEventListener('keydown', toggleContainer)
      document.removeEventListener('mousemove', toggleContainer);
      document.removeEventListener('touchstart', toggleContainer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MetadataContainer ref={containerRef}>
      <h1>{media?.name}</h1>
      <p>{metadata}</p>
    </MetadataContainer>
  )
};

PlayerMetadata.propTypes = {
  media: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    season: PropTypes.number,
    number: PropTypes.number,
    image: PropTypes.string,
    mediaUrl: PropTypes.string,
    summary: PropTypes.string
  })
}

export default PlayerMetadata;
