import React from "react";
import {
  FooterSocials,
  Social,
  Socials,
  StyledFooter,
  StyledFooterMainText,
  Developed,
  Developer,
} from "../../styles/Footer.styled/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMainText
        href="mailto:christianbolofer@gmail.com"
        data-hover="Let's talk!"
      >
        christianbolofer@gmail.com
      </StyledFooterMainText>
      <FooterSocials>
        <Socials>
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/iamchrstnblfr"
          >
            facebook{" "}
          </Social>
          —{" "}
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/iamchrstnblfr"
          >
            {" "}
            BEHANCE{" "}
          </Social>
          —
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/ChanBolo/shots"
          >
            {" "}
            DRIBBBLE{" "}
          </Social>
          —
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/iamchrstnblfr/"
          >
            {" "}
            INSTAGRAM{" "}
          </Social>
        </Socials>
        <Developed>
          developed by{" "}
          <Developer
            target="_blank"
            rel="noopener noreferrer"
            href="https://jerichobantiquete.netlify.app/"
          >
            Jericho
          </Developer>
        </Developed>
      </FooterSocials>
    </StyledFooter>
  );
};

export default Footer;
