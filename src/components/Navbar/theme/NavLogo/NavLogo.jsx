import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../../theme/colors";

const NavLogo = styled(Link)`
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 36px;

  @media screen and (max-width: 1000px){
    margin-left: 35vw;
  }

  @media screen and (max-width: 450px) {
    font-size: 24px;
    margin-left: 20vw;
  }
`;

export default NavLogo;
