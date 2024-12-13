import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  layout: React.ReactElement; // Layout component
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ layout }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{layout}</>;
};

export default ProtectedRoute;
