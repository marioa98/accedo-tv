import PropTypes from 'prop-types';
import styled from 'styled-components';

const MediaImage = styled.div`
  width: 260px;
  height: 360px;
  background-size: contain;
  background-image: ${({ image }) => `url(${image})`};
`;

MediaImage.propTypes = {
  image: PropTypes.string
}

export default MediaImage;
