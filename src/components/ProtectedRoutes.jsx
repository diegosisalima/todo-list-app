import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isLogin }) => {
  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoutes;
