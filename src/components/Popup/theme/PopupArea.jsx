import styled from "styled-components";
import colors from "../../../theme/colors";

const { white, blue } = colors;

const PopupArea = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  background-color: ${white};
  text-align: center;
  top: 30%;
  left: 35%;

  border: 6px solid ${blue};
  border-radius: 8px;

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 1200px){
    left: 25%;
  }

  @media (max-width: 900px){
    left: 20%;
    top: 20%;
    height: 300px;
    width: 500px;
  }

  @media (max-width: 600px){
    height: 240px;
    width: 300px;
    top: 30%;
    left: 15%;
  }
`;

export default PopupArea;
