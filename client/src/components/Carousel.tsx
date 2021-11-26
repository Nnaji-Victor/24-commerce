import React from "react";
import { Carousel as CarouselContainer } from "@trendyol-js/react-carousel";
import styled from "@emotion/styled";

const Carousel: React.FC = ({ children }) => {
  let mql = window.matchMedia('(max-width: 600px)');
  return (
    <StyledCarousel>
      <CarouselContainer show={mql.matches ? 1.5 : 4.5} slide={mql.matches ? 1 : 3} swiping={true}>
        {children}
      </CarouselContainer>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  .styles-module_carousel-base__3keqD {
    & > div:first-of-type,
    & > div:last-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      position: relative;

      button {
        border: none;
        cursor: pointer;
        height: 100%;
        outline: 0;
        position: relative;
        width: 100%;
        background: url(https://cdn.dsmcdn.com/web/production/slick-arrow.svg)
          100% no-repeat;

        &[data-direction="left"] {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export default Carousel;
