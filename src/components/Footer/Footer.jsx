import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../theme/colors';
import githubLogo from '../../static/github-icon.png'

const Div = styled.div`
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  position: fixed;
  bottom: 0;
  height: 10vh;
  align-items: center;
  text-align: center;
  justify-content: center;

  h1 {
    font-size: 16px;
  }

  img {
    margin-top: 2vh;
    height: 32px;
    width: 32px;
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width:400px){
    display: flex;
    h1 {
      margin-left: 16px;
    }

    img {
      margin-top: 0;
    }
  }
`

const Footer = () => {
  const goToRepo = () => {
    window.location.href = 'https://github.com/marioa98/accedo-tv'
  }

  return (
    <Div>
      <img
        alt='github-repo-link'
        src={githubLogo}
        onClick={goToRepo}
      />
      <h1>Mario Martinez</h1>
    </Div>
  );
};

export default Footer;
