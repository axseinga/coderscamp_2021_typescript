import React from 'react';
import { useAuth } from '../context/authContext';
import { useLocation, Navigate } from 'react-router-dom';

export const AdminAuth = ({ children }: { children: JSX.Element }) => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if (!isAdmin()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
