import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ArticleContext } from "../context/ArticleContext";

const Comment = ({articleId}) => {
  const { currentUser } = useContext(AuthContext);
  const { articles } = useContext(ArticleContext)
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);


  const addComment = () => {
    if (inputText.trim() !== "") {
      const newComment = {
        text: inputText,
        author: currentUser.email,
        articleId: articleId,
      };
      setComments([...comments, newComment]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="flex flex-col">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Leave your toughts"
          className="w-2/3 border border-gray-300 focus:border-black 
      px-4 py-2 rounded-md  outline-none"
        />
        <button className="button-xs w-2/3" onClick={addComment}>
          Add Comment
        </button>
      </div>

      {/* Render comments */}
      <div>
        {comments.map((comment, index) => (
          <div className="mt-4"
            key={index}
          >
            {comment.articleId === articleId && ( // Check if the comment belongs to the current article
              <>
                <div>
                  <span className="text-secondary">{comment.author}</span> says:
                </div>
                <div>{comment.text}</div>
                {currentUser.email === comment.author && (
                  <div>
                    <button
                      className="button-xs-secondary"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
