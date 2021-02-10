import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const ServiceTemplateContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction: ${({ reversed }) => reversed && "row-reverse"};
  margin-bottom: 4rem;

  
  @media screen and (max-width : 500px){
    flex-wrap : wrap;
    justify-content: center;
    flex-direction : column-reverse;
  }
`;

const TextContainer = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceImageContainer = styled.div``;

const ServiceImage = styled.img`
  height: 18em;
  width: 22em;

  @media screen and (max-width: 500px) {
    width: 250px;
    height: auto;
  }
`;
const ServiceSubTitle = styled.div`
  font-size: 30px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
  font-size: 25px;
  margin-top: 10px;
  }
`;

const ServiceDescription = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  color: #7a7a7a;
  max-width: 60%;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const ServiceTemplate = (props) => {
  const { title, image, description, reversed } = props;
  return (
    <ServiceTemplateContainer reversed={reversed}>
      <TextContainer>
        <ServiceSubTitle>{title}</ServiceSubTitle>
        <ServiceDescription>{description}</ServiceDescription>
      </TextContainer>
      <ServiceImageContainer>
        <ServiceImage src={image} />
      </ServiceImageContainer>
    </ServiceTemplateContainer>
  );
};

export default ServiceTemplate;
