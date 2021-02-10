import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const ServiceTemplateContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction: ${({reversed}) =>reversed && 'row-reverse'};
  margin-bottom: 4rem;
`;

const TextContainer = styled.div`
flex: 1;
display:flex;
width:700px;
flex-direction: column;
justify-content:center;
align-items:center;
`

const ServiceImageContainer = styled.div`
flex: 1;
`

const ServiceImage = styled.img`
height : 18em;
width : 22em;

`
const ServiceSubTitle = styled.div`
font-size: 30px;
font-weight: 500;
`


const ServiceDescription = styled.div`
font-size : 1rem;
font-weight: 400;
line-height:1.5rem;
margin-top: 1.5rem;
color: #7a7a7a;
max-width: 60%;
`


const ServiceTemplate = (props) => {
    const {title,image,description, reversed} = props;
  return (
    <ServiceTemplateContainer reversed = {reversed}>
      <Marginer direction = 'vertical' margin = '200px' />
      <TextContainer>
        <ServiceSubTitle>{title}</ServiceSubTitle>
        <ServiceDescription>{description}</ServiceDescription>
      </TextContainer>
      <ServiceImageContainer>
        <ServiceImage src = {image} />
      </ServiceImageContainer>
    </ServiceTemplateContainer>
  );
};

export default ServiceTemplate;
