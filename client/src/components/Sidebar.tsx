import styled from "@emotion/styled";
import React from "react";
import { getCategories } from "../api";
import { useAsync } from "../hooks/useAsync";
import { ChildCategory } from "../types/types";
import { rangeMap } from "../utils";
import Carousel from "./Carousel";
import Skeleton from "./Skeleton";

interface DataProps {
  data: {
    categories: {
      childrenCategories: ChildCategory[];
    }[];
  };
}
const Sidebar = () => {
  const { data, status, run } = useAsync<DataProps>();
  React.useEffect(() => {
    run(getCategories());
  }, [run]);

  const render = () => {
    if (status === "idle" || status === "pending") {
      return (
        <SyledLoadingSection>
          {rangeMap(6, (i) => (
            <Skeleton key={i} />
          ))}
        </SyledLoadingSection>
      );
    }

    if (status === "resolved") {
      const categoryData = data?.data?.categories[0]?.childrenCategories;
      return (
        <StyledCategory>
          <h3 className="category-title">Categories</h3>
          {categoryData ? (
            <Carousel>
              {categoryData.map((data: ChildCategory) => (
                <React.Fragment key={data.name}>
                  <StyledCategorySection href={`/${data.urlPath}`}>
                    <span className="image-column">
                      <img src={data.image} alt="" />
                    </span>
                  </StyledCategorySection>
                  <h4 className="category">{data.name}</h4>
                </React.Fragment>
              ))}
            </Carousel>
          ) : null}
        </StyledCategory>
      );
    }

    //Todo
    return <div>there was an error</div>;
  };

  return render();
};

const SyledLoadingSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
  overflow: scroll;
`;

const StyledCategorySection = styled.a`
  background-color: #dfdbe5;
  margin-right: 2rem;
  display: block;

  .image-column {
    /* height: 16rem; */
    padding: 1rem;
    display: block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StyledCategory = styled.div`
  .category {
    font-size: 1.5rem;
    margin-top: 1.2rem;
  }

  .category-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
    margin-left: 2rem;
  }
`;

export default Sidebar;
