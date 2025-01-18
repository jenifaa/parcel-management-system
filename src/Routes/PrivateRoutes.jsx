
import useAuth from "@/Components/Hooks/useAuth";
import Loading from "@/Components/Shared/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
