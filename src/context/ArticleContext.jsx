import { createContext, useState, useEffect } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || [
      {
        id: 1,
        author: "Evelyn",
        date: "2024/05/12",
        image: "/ReactImg.png",
        category: "React",
        title: "Intro to React",
        preRead: "In the world of web development...",
        mainText:
          "In the world of web development, creating dynamic and interactive user interfaces is paramount. Enter React, a JavaScript library developed by Facebook that has revolutionized the way developers approach building UI components. With its declarative syntax, component-based architecture, and efficient rendering, React has become the go-to choice for many modern web applications.",
      },
      {
        id: 2,
        author: "Evelyn",
        date: "2024/05/12",
        image: "/DesignImg.png",
        category: "Design",
        title: "Power of color",
        preRead: "Color is a fundamental element...",
        mainText:
          "Color is a fundamental element in design, playing a pivotal role in how audiences perceive and interact with visual content. The right color choices can evoke emotions, convey messages, and enhance the overall aesthetic appeal. In branding, colors are strategically chosen to align with the brand's identity and values, influencing consumer perception and behavior. For instance, blue often represents trust and professionalism, making it a popular choice for corporate designs, while vibrant colors like red and yellow can create a sense of urgency or excitement, commonly used in marketing campaigns. In user interface design, color is crucial for usability and accessibility, guiding user actions and improving navigation. Understanding color theory, including concepts like contrast, harmony, and color psychology, allows designers to create visually compelling and effective designs. By leveraging the power of color, designers can not only attract attention but also create memorable and impactful experiences.",
      },
      {
        id: 3,
        author: "Evelyn",
        date: "2024/0512",
        image: "/UIUXImg.png",
        category: "UIUX",
        title: "What is UIUX",
        preRead: "UI/UX refers to User Interface...",
        mainText:
          "UI/UX refers to User Interface (UI) and User Experience (UX) design, crucial aspects of creating digital products. UI design focuses on the visual elements of a product, including layout, colors, and typography, ensuring an attractive and intuitive interface. UX design, on the other hand, emphasizes the overall user journey, aiming to enhance user satisfaction by improving usability, accessibility, and interaction. Together, UI and UX design aim to create seamless, enjoyable, and effective digital experiences. Good UI/UX design is essential for retaining users, driving engagement, and achieving business goals in the digital landscape.",
      },
      {
        id: 4,
        author: "Evelyn",
        date: "2024/05/12",
        image: "/UIUXImg.png",
        category: "UIUX",
        title: "This is title UIUX",
        preRead: "E something about UIUX. lala",
        mainText: "This is the main text of blog 4.",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles))
  }, [articles]);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {props.children}
    </ArticleContext.Provider>
  );
};

  