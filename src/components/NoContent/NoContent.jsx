import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Buttons/Button';

const NoItemsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;

  div {
    position: relative;
    text-align: center;
    top: 30vh;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  button {
    font-size: 16px;
  }
`

const NoContent = ({
  title,
  message,
  buttonLabel,
  onClick
}) => (
  <NoItemsContainer>
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <Button className="primary" onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  </NoItemsContainer>
);

NoContent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func
}

export default NoContent;
