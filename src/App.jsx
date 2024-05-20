import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

//import page
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs";
import Write from "./pages/Write";

//import component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ArticleDisplay from "./component/ArticleDisplay";
import LogIn from "./component/LogIn";
import Register from "./component/Register";
import PrivateRoutes from "./component/PrivateRoutes";

//import provider
import { ArticleProvider } from "./context/ArticleContext";

const App = () => {

  return (
    <BrowserRouter>
      <ArticleProvider>
        <Header />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/write" element={<Write />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<ArticleDisplay />} />
          </Route>

          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </ArticleProvider>
    </BrowserRouter>
  );
};

export default App;