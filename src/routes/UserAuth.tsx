import React from 'react';
import { useAuth } from '../context/authContext';
import { useLocation, Navigate } from 'react-router-dom';

type Props = {
  requiredRoles: string[];
  children: JSX.Element;
};

export const UserAuth = ({ requiredRoles, children }: Props) => {
  const { isAuthorized, hasSomeOfRole } = useAuth();
  const location = useLocation();

  if (!isAuthorized() || !hasSomeOfRole(requiredRoles)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
