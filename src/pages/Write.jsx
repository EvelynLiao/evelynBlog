import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";
import { AuthContext } from "../context/AuthContext";

const Write = () => {
  const { currentUser } = useContext(AuthContext);
  const { setArticles } = useContext(ArticleContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    category: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    mainText: "",
  });

  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.category && userInput.title && userInput.mainText) {
      const newArticle = {
        id: Date.now(),
        author: currentUser.email,
        image: image,
        category: userInput.category,
        title: userInput.title,
        date: userInput.date,
        mainText: userInput.mainText,
      };
      setArticles((prevArticles) => [...prevArticles, newArticle]);
      setUserInput({ title: "", category: "", mainText: "" });

      navigate(`/blogs/${newArticle.id}`);
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    if (e.target.name === "category") {
      switch (e.target.value) {
        case "React":
          setImage("ReactImg.png");
          break;
        case "UIUX":
          setImage("UIUXImg.png");
          break;
        case "Design":
          setImage("DesignImg.png");
          break;
        default:
          setImage("");
          break;
      }
    }
  };

  const formatMainText = (text) => {
    return { __html: text.replace(/\n/g, "<br />") };
  };

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <label htmlFor="category"></label>
            <select
              className="font-bold input text-secondary"
              name="category"
              id="category"
              value={userInput.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="React">React</option>
              <option value="UIUX">UIUX</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={userInput.title}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="title">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={userInput.date}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="mainText">Main Text:</label>
            <textarea
              id="mainText"
              name="mainText"
              value={userInput.mainText}
              onChange={handleChange}
              className="input"
            ></textarea>
          </div>
          <button type="submit" className="button-s">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;
