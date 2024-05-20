import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const { userLoggedIn } = useContext(AuthContext);

    return userLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes