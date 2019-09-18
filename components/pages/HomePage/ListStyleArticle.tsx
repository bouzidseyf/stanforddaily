import React from "react";
import { Article, ArticleHeader } from "components/Article";
import { AuthorView } from "./AuthorView";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

export const ListStyleArticle: React.ElementType = ({
  post,
  displayAuthor = true,
}: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article post={post}>
      {displayAuthor && <AuthorView authors={tsdAuthors} />}
      <ArticleHeader>
        <ArticleTitleWithLink post={post} marginBottomMore />
      </ArticleHeader>
    </Article>
  );
};
