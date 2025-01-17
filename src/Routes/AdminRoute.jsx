import useAdmin from "@/Components/Hooks/useAdmin";
import useAuth from "@/Components/Hooks/useAuth";
import Loading from "@/Components/Shared/Loading";
import React from "react";

import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation()
  if (loading || isAdminLoading) {
    return <Loading></Loading>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
