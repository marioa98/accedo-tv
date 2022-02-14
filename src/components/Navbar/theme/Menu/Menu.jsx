import styled from "styled-components";
import colors from "../../../../theme/colors";

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;

  @media only screen and (max-width:1000px) {
      display: flex;
      flex-direction: column;
      width: 98vw;
      height: 75px;
      position: absolute;
      top: ${({ open }) => open ? '80px' : '0'};
      left: 0;
      background-color: ${colors.white};
      transition: all .5s ease;
      border: 1vw solid ${colors.blue};
      margin: 0;
      z-index: ${({ open }) => open ? 0 : '-1'};
  }
`;

export default Menu;
