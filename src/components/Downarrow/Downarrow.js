import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px solid #00B997;
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 29px;
`;

export function DownArrow(props) {
  return (
    <ArrowContainer {...props}>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
}