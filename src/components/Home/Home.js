import React from "react";
import {
  HomeDetails,
  HomeImage,
  StyledHome,
  Subtitle,
  SubtitleItalic,
  SubtitleRegular,
  SubTitles,
  SupTitle,
  Title,
} from "../../styles/Home.styled/Home.styled";

const Home = () => {
  return (
    <StyledHome id="home">
      <HomeDetails>
        <SupTitle>Hello, I'm Christian Bolofer!</SupTitle>
        <Title>
          UI/UX & Graphic <span>De</span>signer, <br /> based in Philippines.
        </Title>
        <SubTitles>
          <Subtitle>
            <SubtitleRegular>FILIPINO</SubtitleRegular>
            <SubtitleItalic>* AVAILABLE WORLDWIDE</SubtitleItalic>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>DESIGN · PHOTOGRAPHY</SubtitleRegular>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>(2022) ALL RIGHTS RESERVED</SubtitleRegular>
          </Subtitle>
        </SubTitles>
      </HomeDetails>
      <HomeImage>
        <img
          src="https://images.pexels.com/photos/3117550/pexels-photo-3117550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </HomeImage>
    </StyledHome>
  );
};

export default Home;
