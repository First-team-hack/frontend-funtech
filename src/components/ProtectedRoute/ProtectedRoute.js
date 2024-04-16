import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AUTH_ROUTE } from '../../utils/constants';
function ProtectedRoute({ component: Component, ...props }) {
  const location = useLocation();
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={AUTH_ROUTE} replace={true} state={location.pathname} />
  );
}

export default ProtectedRoute;
