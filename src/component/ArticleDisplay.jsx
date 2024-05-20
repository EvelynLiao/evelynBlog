import { useContext, useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";
import Comment from "./Comment";
import { AuthContext } from "../context/AuthContext";
import  ArticleList  from "./ArticleList";

const ArticleDisplay = () => {
  const { id } = useParams();
  const { articles, setArticles } = useContext(ArticleContext);
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const article = articles.find((article) => article.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [editArticle, setEditArticle] =  useState({...article})

  const handleDelete = () =>{
    if(window.confirm("Are you sure you want to delet this article?")){
      const updatedArticles =  articles.filter((a)=>a.id !== parseInt(id));
      setArticles(updatedArticles);
      navigate("/blogs")
    }
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const {name, value} = e.target;
    setEditArticle({...editArticle, [name]: value});
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const updatedArticles = articles.map((a) =>
      a.id === parseInt(id) ? editArticle: a);
      setArticles(updatedArticles)
    setIsEditing(false);
  }

  const renderEditDeleteButton = () =>{
    if (currentUser && currentUser.email === article.author) {
      return (
        <div className="mb-4">
          <button className="button-xs-secondary mr-4" onClick={handleEdit}>
            Edit
          </button>
          <button className="button-xs-secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
      <div className="col-span-3 p-4 border ">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl font-bold">{article.title}</div>
          <div className="flex">
            <div className="text-secondary mr-4">{article.author}</div>
            <div>Date: {article.date}</div>
          </div>
        </div>

        <img className="w-6/12 mb-4" src={article.image} alt={article.title} />
        <div className="mb-4"> {article.mainText}</div>
        {isEditing ? (
          <form onSubmit={handleSubmitEdit}>
            <p>Title</p>
            <input
              className="input-s"
              type="text"
              name="title"
              value={editArticle.title}
              onChange={handleEditChange}
              required
            />
          
            <p>Main</p>
            <textarea
              className="input-s"
              name="mainText"
              value={editArticle.mainText}
              onChange={handleEditChange}
              required
            ></textarea>
            <div>
              <button className="button-xs mt-0 mb-4" type="submit">Save Changes</button>
            </div>
          </form>
        ) : (
          renderEditDeleteButton()
        )}

        <div className="category">#{article.category}</div>

        <div>
          <Comment articleId={article.id} />
        </div>
      </div>

      <div className="col-span-1">
        <ArticleList layout="list" articles={articles} />
      </div>
    </div>
  );
}; 

export default ArticleDisplay;
