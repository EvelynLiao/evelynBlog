import { useContext, useEffect, useState } from "react"
import { ArticleContext } from "../context/ArticleContext";

const Filter = ({setFilteredArticles}) =>{
    const { articles } = useContext(ArticleContext)
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(()=>{
        const filtered = selectedCategory
          ? articles.filter((article) => article.category === selectedCategory)
          : articles;
        setFilteredArticles(filtered);
    }, [selectedCategory, articles, setFilteredArticles])

    const filterArticlesByCategory = (category)=>{
        setSelectedCategory(category);
    }

    return (
      <div>
        {/* display categories */}
        <div className="mt-4">
          <button
            onClick={() => filterArticlesByCategory(null)}
            className="category-s"
          >
            All
          </button>
          <button
            onClick={() => filterArticlesByCategory("React")}
            className="category-s"
          >
            #React
          </button>
          <button
            onClick={() => filterArticlesByCategory("Design")}
            className="category-s"
          >
            #Design
          </button>
          <button
            onClick={() => filterArticlesByCategory("UIUX")}
            className="category-s"
          >
            #UIUX
          </button>
        </div>
      </div>
    );
}

export default Filter