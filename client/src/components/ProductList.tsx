import styled from "@emotion/styled";
import React from "react";
import { getProducts } from "../api";
import { useAsync } from "../hooks/useAsync";
import media from "../styles/media";
import { Article, CategoryArticle } from "../types/types";
import { rangeMap } from "../utils";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

interface ProductProps {
  data: {
    categories: {
      categoryArticles: {
        articles: Article[];
      };
    }[];
  };
}
const ProductList = () => {
  const { data, status, run } = useAsync<ProductProps>();

  React.useEffect(() => {
    run(getProducts());
  }, [run]);

  const render = () => {
    if (status === "idle" || status === "pending") {
      return (
        <SyledLoadingSection>
          {rangeMap(12, (i) => (
            <Skeleton key={i} />
          ))}
        </SyledLoadingSection>
      );
    }

    if (status === "resolved") {
      const productData = data?.data?.categories[0]?.categoryArticles?.articles;
      return (
        <StyledProductContainer>
          {productData!.map((product: Article, i: number) => (
            <ProductCard product={product} key={product.name + i} />
          ))}
        </StyledProductContainer>
      );
    }

    //TODO
    return <div>there was an error</div>;
  };

  return (
    <StyledProductList>
      <h3 className="title">Products</h3>
      {render()}
    </StyledProductList>
  );
};

const StyledProductList = styled.section`
  margin-top: 5rem;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  margin-left: 2rem;
`;

const SyledLoadingSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const StyledProductContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 3rem;
  gap: 3rem;
  ${media.tablet`  grid-template-columns: repeat(2, minmax(0, 1fr))`}
  ${media.phone`  grid-template-columns: repeat(1, minmax(0, 1fr));`}
`;

export default ProductList;
