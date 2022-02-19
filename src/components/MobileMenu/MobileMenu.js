import React from "react";
import {
  MobileLink,
  MobileLinks,
  StyledMobileMenu,
} from "../../styles/MobileMenu.styled/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggleHandler }) => {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      <MobileLinks>
        <MobileLink onClick={toggleHandler} to="home">
          home
        </MobileLink>
        <MobileLink onClick={toggleHandler} to="about">
          story
        </MobileLink>
        <MobileLink onClick={toggleHandler} to="work">
          work
        </MobileLink>
        <MobileLink onClick={toggleHandler} to="contact">
          contact
        </MobileLink>
      </MobileLinks>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
