import React from "react";
import { getCategories } from "../api";
import { useAsync } from "../hooks/useAsync";

const ProductList = () => {
  const { data, status, run } = useAsync();

  console.log(data,status);
  React.useEffect(() => {
    run(getCategories());
  }, [run]);

  // console.log({ data, status });
  return <div>Hello</div>;
};

export default ProductList;
