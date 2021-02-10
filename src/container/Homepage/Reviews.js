import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import ServiceTitle from "../../components/ServiceTitle/ServiceTitle";
import { Element } from "react-scroll";
import ReviewCard from "../../components/ReviewCard/Reviewcard";
import { useMediaQuery } from "react-responsive";

import User1Img from "../../assets/pictures/profile_picture_1.jpg";
import User2Img from "../../assets/pictures/profile_picture_2.jpg";
import User3Img from "../../assets/pictures/profile_picture_3.jpg";
import User4Img from "../../assets/pictures/profile_picture_4.jpeg";

const ReviewsContainer = styled(Element)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDotGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 60%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const StyledDotGroup = styled(DotGroup)`
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    margin-left: 5px;
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

const StyledSlider = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Reviews = () => {
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });

  return (
    <Element name="reviews">
      <ReviewsContainer>
        <ServiceTitle>What others are saying about us</ServiceTitle>

        <StyledCarouselProvider
          naturalSlideWidth={isMobile ? 210 : 200}
          naturalSlideHeight={isMobile ? 300 : 200}
          totalSlides={4}
          visibleSlides={isMobile ? 1 : 2}
        >
          <Slider>
            <StyledSlider index={0}>
              <ReviewCard
                text={
                  " I very much enjoyed working with WebR and the team - they have an excellent grasp of their subject, and have created something great for us."
                }
                imageUrl={User3Img}
                username={"Armin Arlert"}
              />
            </StyledSlider>

            <StyledSlider index={1}>
              <ReviewCard
                text={
                  "It was really interesting to work with them as they are profesional and experienced on what they are doing. Would definitely suggest others to use WebR"
                }
                imageUrl={User2Img}
                username={"Eren Jeager"}
              />
            </StyledSlider>

            <StyledSlider index={2}>
              <ReviewCard
                text={
                  "I very much enjoyed working with WebR and the team - they have an excellent grasp of their subject, and have created something great for us."
                }
                imageUrl={User1Img}
                username={"Gabi Braun"}
              />
            </StyledSlider>

            <StyledSlider index={3}>
              <ReviewCard
                text={
                  "It was really interesting to work with them as they are profesional and experienced on what they are doing. Would definitely suggest others to use Beema"
                }
                imageUrl={User4Img}
                username={"Jean Kriesten"}
              />
            </StyledSlider>
          </Slider>

          <StyledDotGroupContainer>
            <StyledDotGroup />
          </StyledDotGroupContainer>
        </StyledCarouselProvider>
      </ReviewsContainer>
    </Element>
  );
};

export default Reviews;
