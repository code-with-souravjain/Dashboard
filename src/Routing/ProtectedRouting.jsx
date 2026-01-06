import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouting = ({ children }) => {
  const token = localStorage.getItem("authtoken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRouting;
