import { useContext, useState } from "react";
import ArticleList from "../component/ArticleList";
import { ArticleContext } from "../context/ArticleContext";

const Blogs = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <div className="max-w-screen-md mx-auto">
      <ArticleList layout="list" articles={articles} />
    </div>
  );
};

export default Blogs;
