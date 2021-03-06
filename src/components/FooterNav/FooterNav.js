import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterNavContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const ItemsList = styled.ul`
  color: #fff;
  font-size: 12px;
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 9px;
    gap: 1rem;
  }

  li {
    &:hover {
      cursor: pointer;
    }
  }
`;

const IconsList = styled.div`
  font-size: 16px;
  display: flex;
  gap: 1.5rem;
  color: #fff;

  a {
    color: inherit;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <ItemsList>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact</li>
      </ItemsList>
      <IconsList>
        <a
          href="https://www.linkedin.com/in/dilshad-alam-485906198/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/Dilshad15384318" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </IconsList>
    </FooterNavContainer>
  );
};

export default FooterNav;
