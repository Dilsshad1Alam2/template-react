import React from 'react'
import styled from 'styled-components';


const ButtonContainer = styled.button`
font-size:${({small}) => small ? '11px' : '14px' };
padding: ${({small}) => small ? '8px 10px' : '10px 18px' };
outline : none;
border-radius: 3px;
font-weight: ${({small}) => small ? '' : '600' };
border : none;
background-color : #00B997;
color: white;
letter-spacing: 1px;
text-transform : uppercase;
border: 2px solid #00B997;

&:hover{
    background-color: transparent;
    border: 2px solid #00B997;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
`


const button = (props) => {
    return (
            <ButtonContainer {...props}>{props.children}</ButtonContainer>
    )
}

export default button
