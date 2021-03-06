import React from 'react';
import constants from '../../config/constants';
import useViewport from '../../hooks/useVieport';
import Logo from '../../static/accedoLogo.png'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuLink,
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo
} from './theme';

const { paths } = constants;

const Navbar = () => {
  const [isOptionsOpen, setOptions] = React.useState(false);
  const { width } = useViewport()

  const menuHandler = () => {
    setOptions((prevValue) => !prevValue);
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon>
              <img src={Logo} alt="Logo" />
            </NavIcon>
            Accedo.tv
          </NavLogo>
          {width <= 1000 && (
            <MenuButton
              onClick={menuHandler}
              transparent
              style={{
                transform: `rotate(${isOptionsOpen ? '-' : ''}90deg)`,
                marginRight: '10vw'
              }}
              className="alert transparent"
            >
              &#10095;
            </MenuButton>
          )}
          <Menu open={isOptionsOpen}>
            <MenuItem>
              <MenuLink to={paths.videoHistory}>
                <MenuButton>History</MenuButton>
              </MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
  
export default Navbar;
  