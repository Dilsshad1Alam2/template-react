import React from "react";
import styled from "styled-components";

const ServiceTitleContainer = styled.div`
  margin: 3rem;

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  max-width: 500px;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 500px) {
  font-size: 30px;
  }
`;

const ServiceTitle = (props) => {
  return (
    <ServiceTitleContainer {...props}>
      <Title>{props.children}</Title>
    </ServiceTitleContainer>
  );
};

export default ServiceTitle;
