import React from "react";
import styled from "styled-components";
import Logo from "../../components/Logo/logo";
import Button from "../../components/Button/button";
import {Element , scroller } from 'react-scroll'

const NavbarContainer = styled.div`
  width: 95%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const OtherNavContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const LoginButton = styled(Button)`
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;

  &:hover {
    border: none;
    border-bottom: 3px solid #00b997;
    border-radius: 0px;
  }
`;


function scroll(params) {
  scroller.scrollTo('moreabout',{smooth: true, duration :1000})
}

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo inline />
      </LogoContainer>
      <OtherNavContainer>
        <Button onClick = {scroll} small>About</Button>
        <LoginButton small> Sign In</LoginButton>
      </OtherNavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
