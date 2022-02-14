import styled from "styled-components";

import colors from "../../../../theme/colors";

const { darkYellow, black, yellow } = colors;
const MenuButton = styled.button`
  border-radius: 20px;
  background-color: ${({ transparent }) => transparent ? 'transparent' : darkYellow};
  color: ${({ transparent }) => transparent ? darkYellow : black};
  padding: 10px 28px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all .5s ease;
  font-weight: bold;

  &:hover{
    background-color: ${({ transparent }) => transparent ? 'transparent' : yellow};
  }

  @media only screen and (max-width:1000px) {
      padding: ${({ transparent }) => transparent ? 0 : '10px 20px'};
  }
  @media only screen and (max-width:375px) {
      font-size: 18px;
  }
`;

export default MenuButton;
