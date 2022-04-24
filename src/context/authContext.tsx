import React, { createContext, useContext } from 'react';
import { useUserInfoQuery } from './api/useUserInfoQuery';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

type AuthContextType = {
  isAuthorized: () => boolean;
  logout: () => void;
  hasSomeOfRole: (requiredRoles: string[]) => boolean;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: Props) => {
  const { userInfo } = useUserInfoQuery();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  const isAuthorized = () => {
    return accessToken !== null;
  };

  const hasSomeOfRole = (requiredRoles: string[]) => {
    return requiredRoles.includes(userInfo.data?.data.role);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    queryClient.invalidateQueries('userInfo');

    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        logout,
        hasSomeOfRole: (requiredRoles) => hasSomeOfRole(requiredRoles),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
