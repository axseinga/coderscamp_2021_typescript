import React from 'react';
import { useAuth } from '../context/authContext';
import { useLocation, Navigate } from 'react-router-dom';

export const UserAuth = ({ children }: { children: JSX.Element }) => {
  const { isUser } = useAuth();
  const location = useLocation();

  if (!isUser()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
