import React from 'react';
import { useAuth } from '../context/authContext';
import { useLocation, Navigate } from 'react-router-dom';

export const AdminAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth, isAdmin } = useAuth();
  const location = useLocation();

  if (!isAuth() && !isAdmin()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
