import React from "react";
import {Element} from 'react-scroll'
import ServiceTitle from "../../components/ServiceTitle/ServiceTitle";
import styled from "styled-components";
import img from "../../assets/illustrations/campaign_launch_flatline.png";

const MoreAboutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 500px) {
  flex-direction: column-reverse;
  }
`;

const Description = styled.div`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
  text-align: justify;

  @media screen and (max-width: 500px) {
  font-size: 18px;

  }

`;
const Image = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: auto;
  }
`;

const MoreAbout = () => {
  return (
    <Element name='moreabout'>
    <MoreAboutContainer>
      <ServiceTitle>More About WebR</ServiceTitle>
      <InnerContainer>
        <Description>
        WebR is about designing, building and deliverying best quality
          software for your company. <br />
          <br /> We make sure that you get the best software inferstracture and
          set of applications to ensure the best experience of your clients.{" "}
          <br />
          <br />
          So wether you are handling thousands of payment transactions or you’re
          just starting out, you are in the right place.{" "}
        </Description>
        <Image src={img} />
      </InnerContainer>
    </MoreAboutContainer>
    </Element>
  );
};

export default MoreAbout;
