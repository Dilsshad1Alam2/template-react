import React from 'react'
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import styled from 'styled-components';
import img from "../../assets/illustrations/campaign_launch_flatline.png";


const MoreAboutContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
`

const Description = styled.div`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`
const Image = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
`

const MoreAbout = () => {
    return (
<MoreAboutContainer>
    <ServiceTitle>More About Beema</ServiceTitle>
    <InnerContainer>
        <Description>Beema is about designing, building and deliverying best quality software for your company. <br/><br/> We make sure that you get the best software inferstracture and set of applications to ensure the best experience of your clients. <br/><br/>So wether you are handling thousands of payment transactions or you’re just starting out, you are in the right place. </Description>
        <Image src  = {img} />
    </InnerContainer>
</MoreAboutContainer>
    )
}

export default MoreAbout
