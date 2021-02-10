import styled from "styled-components";
import React from "react";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewcardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 10px 2em;
  position: relative;
`;

const QuoteMark = styled.div`
  color: #d1d1d1;
  position: absolute;
  font-size: 35px;
  top: 14px;
  left: 14px;
`;

const ReviewText = styled.p`
  font-size: 18px;
  color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  padding: 1rem;
  text-align: justify;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  padding: 1rem;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

const Reviewcard = (props) => {
  const { text, imageUrl , username } = props;
  return (
    <ReviewcardContainer>
      <QuoteMark>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteMark>
      <ReviewText>{text}</ReviewText>
      <Line />
      <UserDetails>
        <UserImg src={imageUrl}/>
        <Username>{username}</Username>
      </UserDetails>
    </ReviewcardContainer>
  );
};

export default Reviewcard;
