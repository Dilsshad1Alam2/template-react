import React from "react";
import styled from "styled-components/macro";
import { Element } from "react-scroll";
import ServiceTitle from "../../components/ServiceTitle/ServiceTitle";
import ServiceTemplate from "../../components/ServiceTemplate/ServiceTemplate";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";
import { Marginer } from "../../components/marginer";

const ServiceContainer = styled.div`
  min-height: 1100px;
  font-weight: 700;
  color: #262626;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Services = (props) => {
  return (
    <Element name="Services">
      <ServiceContainer>
        <ServiceTitle>Best Quality Software</ServiceTitle>
        <ServiceTemplate
          title="Fully Integrated Service"
          image={Service1Img}
          description={
            "We build and deliver fully Integreated webapps with cuztomized control panel that fit your company needs"
          }
        />
        <Marginer direction="vertical" margin="25px" />
        <ServiceTemplate
          reversed
          title="Mobile Optimized"
          image={Service2Img}
          description={
            "We build and deliver fully Integreated webapps with cuztomized control panel that fit your company needs"
          }
        />
        <Marginer direction="vertical" margin="25px" />
        <ServiceTemplate
          title="Quality is our priority"
          image={Service3Img}
          description={
            "We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company"
          }
        />
      </ServiceContainer>
      <Marginer direction="vertical" margin="25px" />
    </Element>
  );
};

export default Services;
