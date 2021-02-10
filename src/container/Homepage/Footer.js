import React from "react";
import styled from "styled-components";
import Logo from "../../components/Logo/logo";
import ServiceTitle from "../../components/ServiceTitle/ServiceTitle";
import Button from "../../components/Button/button";
import { Marginer } from "../../components/marginer";
import FooterNav from '../../components/FooterNav/FooterNav';



const FooterContainer = styled.div`
  background-color: #1F1F1F;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const StyledServiceTitle = styled(ServiceTitle)`
color: #fff;
`

const Line = styled.div`
height: 1px;
width: 80%;
background-color:#fff;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <StyledServiceTitle>
        Just say the magic word and we will do the rest
      </StyledServiceTitle>
      <Button>Start your project</Button>
      <Marginer direction = 'vertical' margin = '4em' />
      <Line />
      <Marginer direction = 'vertical' margin = '1.5em' />
      <FooterNav />
    </FooterContainer>
  );
};

export default Footer;
