import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";

const ArticleList = ({ layout, articles }) => {
  console.log(articles);
  const [selectedA, setSelectedA] = useState(null);
  const [filteredArticle, setFilteredArticles] = useState(articles);

const extractFirst50Words = (text) => {
  const words = text.split(" ");
  const more = words.slice(0, 10).join(" ");
  return more + (words.length > 50 ? "..." : "");
};
  
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    setSelectedA(id);
    navigate(`/blogs/${id}`);
  };

  return (
    <div>
      <div className="mb-4">
        <Filter setFilteredArticles={setFilteredArticles} />
      </div>

      <div
        className={
          layout === "card"
            ? "grid grid-cols-3 gap-4"
            : "max-w-screen-md mx-auto"
        }
      >
        {filteredArticle.map((article) => (
          <div
            key={article.id}
            className={
              layout === "card"
                ? "border border-black p-4"
                : "border-b border-black p-4 mb-4"
            }
          >
            <div
              className={
                layout === "card"
                  ? "flex justify-between items-center mb-4"
                  : "flex items-center justify-between mb-2"
              }
            >
              <div
                className={
                  layout === "card"
                    ? "text-2xl font-bold"
                    : "text-xl font-semibold mb-1"
                }
              >
                {article.title}
              </div>

              <div className="flex items-center">
                <p className="mr-1 text-secondary">{article.author}</p>
                <p>{article.date}</p>
              </div>
            </div>

            <div
              className={
                layout === "card"
                  ? "container mx-auto sm:max-w-md lg:max-w-xl xl:max-w-2xl mb-4"
                  : "w-20"
              }
            >
              <img src={article.image} alt={article.title} />
            </div>

            <p className={layout === "card" ? "text-sm" : "text-base"}>
              {extractFirst50Words(article.mainText)}
            </p>

            <button
              className="button-xs"
              onClick={() => handleReadMore(article.id)}
            >
              Read more
            </button>
            <p className="category-s">#{article.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
