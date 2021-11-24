import styled from "@emotion/styled";
import React from "react";
import Sofa from "../assets/sofa.png";
import media from "../styles/media";

const Hero = () => {
  return (
    <StyledHero className="fluid">
      <div className="text-side">
        <h1 className="hero-text">Furnitures you would love</h1>
        <h2 className="hero-description">
          Home 24 has all the essential home funiture.
        </h2>
        <div className="cta">
          <button>View Collections</button>
        </div>
      </div>
      <div className="image-side">
        <img src={Sofa} alt="sofa" />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background-color: #dfdbe5;
  min-height: 40rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  ${media.phablet`
    grid-template-columns: repeat(var(--cols), var(--gridSize));
  `}

  .text-side {
    width: 60%;
    margin: 0 auto;
    letter-spacing: 0.2rem;
    ${media.phablet` width: 100%; grid-column: 2/-2;`}

    .hero-text {
      font-size: 6rem;
      font-weight: 600;
      ${media.tablet`width: 60%`};
      ${media.phablet`width: 80%`};
      ${media.phone`width: 100%`};
    }

    .hero-description {
      margin-top: 2rem;
      font-size: 1.6rem;
    }

    .cta {
      margin-top: 4rem;
      button {
        padding: 1.25rem 2.5rem;
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  .image-side {
    height: 100%;
    position: relative;
    bottom: -5rem;
    ${media.phablet`display: none`}
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Hero;
