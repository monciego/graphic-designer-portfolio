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
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const toBottom = () => {
    scroll.scrollToBottom({ delay: 0, duration: 650 });
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
            <NavLink
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
              to="home"
            >
              Home
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
              to="about"
            >
              Story
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
              to="work"
            >
              Work
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              onClick={toBottom}
              smooth={true}
              duration={650}
              delay={0}
              spyThrottle={0}
              to="contact"
            >
              Contact
            </NavLink>
          </NavList>
        </NavLists>
      </StyledHeader>
    </>
  );
};

export default Navbar;
