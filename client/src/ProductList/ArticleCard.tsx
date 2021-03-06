import React from "react";
import { Article } from "../types/types";
import { formatter } from "../utils";

interface Props {
    article: Article
}
const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <div className={"article"}>
      <img src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};

export default ArticleCard;
