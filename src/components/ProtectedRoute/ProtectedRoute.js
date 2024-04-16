import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
function ProtectedRoute({ component: Component, ...props }) {
  const location = useLocation();
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/auth" replace={true} state={location.pathname} />
  );
}

export default ProtectedRoute;
