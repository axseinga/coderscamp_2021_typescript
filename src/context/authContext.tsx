import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserInfoQuery } from './api/useUserInfoQuery';
import { useNavigate } from 'react-router-dom';
import { QueryCache } from 'react-query';

type AuthContextType = {
  isUser: () => boolean;
  isAdmin: () => boolean;
  isAuth: () => boolean;
  logout: () => void;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: Props) => {
  const { user } = useUserInfoQuery();

  const navigate = useNavigate();

  const isAuth = () => {
    return user.data?.data !== undefined && user.isSuccess;
  };

  const isUser = () => {
    return user.data?.data.role === 'user';
  };

  const isAdmin = () => {
    return user.data?.data.role === 'admin';
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    const queryCache = new QueryCache();
    queryCache.clear();
    navigate('/');
  };
  return (
    <AuthContext.Provider value={{ isUser, isAdmin, isAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
