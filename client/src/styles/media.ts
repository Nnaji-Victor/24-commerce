/** @jsx jsx */
import { css } from '@emotion/react'

const sizes: { [key: string]: number } = {
  giant: 1440,
  desktop: 1200,
  tablet: 900,
  phablet: 768,
  phone: 425,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator: any, label: string) => {
  const emSize = sizes[label]/10;
  accumulator[label] = (...args: any) => css`
      @media (max-width: ${emSize}em) {
        ${css(args)};
      }`
  return accumulator;
}, {});

export default media;