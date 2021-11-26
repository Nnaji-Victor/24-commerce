import styled from "@emotion/styled";
import React from "react";
import media from "../styles/media";
import { Article } from "../types/types";
import { formatter } from "../utils";

interface Product {
  product: Article;
}
const ProductCard: React.FC<Product> = ({ product }) => {
  console.log(product);
  return (
    <StyledProduct>
      <div className="image-section">
        <img src={product.images[0].path} alt={product.variantName} />
      </div>

      <div className="product-content">
        <p className="variant">{product.variantName}</p>
        <h3 className="title">{product.name}</h3>
        <h4 className="product-price">
          {formatter.format(product.prices.regular.value / 100)}
        </h4>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled.article`
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1rem;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100% !important;

  .image-section {
    position: relative;
    img {
      display: block;
      height: 100%;
      max-width: 70%;
      object-fit: cover;
      object-position: top center;
      width: 100%;
      z-index: 1;
      ${media.phablet`max-width: 100%`}
    }
  }
  .product-content {
    text-align: center;
    & .title {
      font-size: 2rem;
      opacity: 0.7;
    }

    & .product-price{
        font-weight: 600;
        font-size: 2rem;
        margin-top: 1rem;
    }

    & .variant{
        font-size: 1.2rem;
        margin-bottom: 1rem;
        opacity: 0.7;
    }
  }
`;

export default ProductCard;
