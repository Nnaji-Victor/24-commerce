import styled from '@emotion/styled';
import React from 'react'

const Hero = () => {
    return (
        <StyledHero className="fluid">
            hero
        </StyledHero>
    )
}

const StyledHero = styled.div`
    background-color: red;
    min-height: 40rem;
`;

export default Hero
