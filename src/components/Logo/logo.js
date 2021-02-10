import React from "react";
import LogoPicture from "../../assets/logo/logo_croped.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
`;

const LogoImg = styled.img`
  height: ${({ inline }) => (inline ? "30px" : "110px")};
  width: ${({ inline }) => (inline ? "30px" : "110px")};
  margin-right: ${({ inline }) => (inline ? "8px" : "0")};
`;

const LogoText = styled.div`
  font-size: ${({ inline }) => (inline ? "20px" : "40px")};
  font-weight:900;
  letter-spacing: 2px;
  line-height: 40px;
  color: ${({ inline }) => (inline ? "#fff" : "#00b997")};
`;

const logo = (props) => {
  return (
    <LogoContainer {...props}>
      <LogoImg {...props} src={LogoPicture} />
      <LogoText {...props}>WebR</LogoText>
    </LogoContainer>
  );
};

export default logo;
