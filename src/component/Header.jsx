import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";
import LandingPage from "../pages/LandingPage";
import logo from "../assets/logo.png";

const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-2 mt-6 items-center">
      <Link to="/" className="mr-4">
        <img className="w-10" src={logo} alt="logo" />
      </Link>

      <nav className="flex justify-end">
        {userLoggedIn ? (
        <>
          <Link to="/write" className="mr-4">
            Write
          </Link>
          <Link to="/blogs" className="mr-4">
            Blogs
          </Link>
          <p className="mr-4 text-secondary">{currentUser.email}</p>
          <button onClick={signOutUser}>Log out</button>
        </>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
