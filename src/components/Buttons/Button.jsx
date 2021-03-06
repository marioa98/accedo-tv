import styled from "styled-components";
import colors from "../../theme/colors";

const {
  black,
  yellow,
  darkYellow,
  red,
  darkRed,
  white,
  pink,
  lightPink,
  blue,
  lightBlue
} = colors;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px 28px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all .5s ease;
  font-weight: bold;
  color: ${black};

  &.alert {
    background-color: ${darkYellow};

    &.transparent {
      color: ${darkYellow};
    }
    
    &:hover{
      background-color: ${yellow};
    }
  }

  &.alert {
    color: ${black};
    background-color: ${darkYellow};

    &.transparent {
      color: ${darkYellow};
    }
    
    &:hover{
      background-color: ${yellow};
    }
  }

  &.primary {
    background-color: ${pink};
    color: ${white};

    &.transparent {
      color: ${pink};
    }

    &:hover{
      background-color: ${lightPink};
    }
  }

  &.secondary {
    background-color: ${blue};
    color: ${white};

    &.transparent {
      color: ${blue};
    }

    &:hover{
      background-color: ${lightBlue};
    }
  }

  &.transparent {
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
    @media only screen and (max-width:1000px) {
      padding: 0;
    }
  }

  &.danger {
    color: ${white};
    background-color: ${darkRed};

    &.transparent {
      color: ${darkRed}
    }

    &:hover{
      background-color: ${red};
    }
  }

  @media only screen and (max-width:1000px) {
      padding: '10px 20px';
  }
  @media only screen and (max-width:375px) {
      font-size: 18px;
  }
`;

export default Button;
