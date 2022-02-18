import React from "react";
import {
  AboutDetails,
  AboutSupTitle,
  AboutText,
  AboutTitle,
  StyledAbout,
} from "../../styles/About.styled/About.styled";

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutSupTitle>ABOUT ME</AboutSupTitle>
      <AboutTitle>
        AIDING BRANDS TO COMMUNICATE WITH <br /> THEIR AUDIENCE IN ELEGANT WAY
      </AboutTitle>
      <AboutDetails>
        <AboutText>
          Kumusta! I'm Christian Bolofer, a student from Pangasinan State
          University — Alaminos City Campus and a Filipino UI/UX and creative
          graphic designer based in the Philippines. I'm passionate about using
          my design to improve the lives of others, and I am always eager to
          learn new things everyday. In my spare time, I enjoy photography,
          video editing, and spending time with my lovable cats. I am passionate
          about designing user experiences that are pleasant, meaningful, and
          powerful.
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default About;
