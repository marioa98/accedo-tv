import styled from "styled-components";

const NavIcon = styled.div`
  img {
    margin-right: .8rem;
    object-fit: contain;
    height: 60px;
    width: 60px;

    @media screen and (max-width: 400px) {
      height: 40px;
      width: 40px;
    }
  }
`;

export default NavIcon
