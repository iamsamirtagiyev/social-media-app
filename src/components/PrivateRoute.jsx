import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((stete) => stete.auth.user);
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
