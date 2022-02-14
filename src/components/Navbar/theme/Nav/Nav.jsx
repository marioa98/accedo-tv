import styled from "styled-components";
import colors from "../../../../theme/colors";

const Nav = styled.nav`
  position: inherit;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: ${colors.blue};
  display: flex;
  z-index: 1;
`;

export default Nav;
