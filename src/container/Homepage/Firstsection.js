import styled from "styled-components";
import React from "react";
import {Element,scroller} from 'react-scroll';
import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button/button";
import Logo from "../../components/Logo/logo";
import Navbar from "../../components/Navbar/Navbar";

const FirstsectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.div`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 3rem;
  color: white;
`;

const scrollToNext = function () {
  scroller.scrollTo('Services',{smooth: true, duration :1000})
};

const Firstsection = () => {
  return (
    <Element name='Firstsection'>
      <FirstsectionContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="4em" />
          <Logo />
          <Marginer direction="vertical" margin="3em" />
          <MainText> Worlds First Software Company</MainText>
          <MainText> For all your needs</MainText>
          <Marginer direction="vertical" margin="3em" />
          <Button onClick={scrollToNext}>Apply Now</Button>
        </BackgroundFilter>
      </FirstsectionContainer>
    </Element>
  );
};

export default Firstsection;
