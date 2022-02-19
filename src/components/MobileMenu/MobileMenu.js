import React from "react";
import {
  MobileLink,
  MobileLinks,
  StyledMobileMenu,
} from "../../styles/MobileMenu.styled/MobileMenu.styled";
import { animateScroll as scroll } from "react-scroll";

const MobileMenu = ({ isOpen, toggleHandler }) => {
  const toBottom = () => {
    scroll.scrollToBottom({ delay: 0, duration: 650 });
  };

  return (
    <StyledMobileMenu isOpen={isOpen}>
      <MobileLinks>
        <MobileLink
          onClick={toggleHandler}
          smooth={true}
          duration={650}
          delay={0}
          spyThrottle={0}
          to="home"
        >
          home
        </MobileLink>
        <MobileLink
          onClick={toggleHandler}
          smooth={true}
          duration={650}
          delay={0}
          spyThrottle={0}
          to="about"
        >
          story
        </MobileLink>
        <MobileLink
          onClick={toggleHandler}
          smooth={true}
          duration={650}
          delay={0}
          spyThrottle={0}
          to="work"
        >
          work
        </MobileLink>
        <MobileLink
          onClick={() => {
            toBottom();
            toggleHandler();
          }}
          smooth={true}
          duration={650}
          delay={0}
          spyThrottle={0}
          to="contact"
        >
          contact
        </MobileLink>
      </MobileLinks>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
