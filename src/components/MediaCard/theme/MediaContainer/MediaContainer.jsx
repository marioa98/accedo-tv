import styled from "styled-components";

const MediaContainer = styled.div`
  position: relative;
  padding: 0 10px;
  cursor: pointer;
  margin-left: 40px;
  
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
  }
`;

export default MediaContainer;
