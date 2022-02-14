import styled from "styled-components";

export const MenuItem = styled.li`
  list-style: none;
  @media screen and (max-width:1000px){
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 120px;
  }
`;

export default MenuItem;
