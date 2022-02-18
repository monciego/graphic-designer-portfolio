import React from "react";
import {
  Logo,
  Menu,
  NavLink,
  NavList,
  NavLists,
  StyledHeader,
} from "../../styles/Navbar.styled/Navbar.styled";

const Navbar = () => {
  return (
    <>
      <StyledHeader>
        <Logo>Christian</Logo>
        <Menu />
        <NavLists>
          <NavList>
            <NavLink to="home">Home</NavLink>
          </NavList>
          <NavList>
            <NavLink to="about">Story</NavLink>
          </NavList>
          <NavList>
            <NavLink to="work">Work</NavLink>
          </NavList>
          <NavList>
            <NavLink to="contact">Contact</NavLink>
          </NavList>
        </NavLists>
      </StyledHeader>
    </>
  );
};

export default Navbar;
