import React, { useState } from "react";
import {
  Logo,
  Menu,
  Close,
  NavLink,
  NavList,
  NavLists,
  StyledHeader,
} from "../../styles/Navbar.styled/Navbar.styled";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <MobileMenu toggleHandler={toggleHandler} isOpen={toggle} />
      <StyledHeader>
        <Logo>Christian</Logo>
        {toggle ? (
          <Close onClick={toggleHandler} />
        ) : (
          <Menu onClick={toggleHandler} />
        )}

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
