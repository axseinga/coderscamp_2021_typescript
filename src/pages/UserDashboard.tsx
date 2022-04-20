import React from 'react';
import { useAuth } from '../context/authContext';
import { useUserInfoQuery } from '../context/api/useUserInfoQuery';

export const UserDashboard = () => {
  const { logout } = useAuth();
  const { userInfo } = useUserInfoQuery();

  return (
    <>
      <h1>User path</h1>
      <button onClick={logout}>Log out</button>
    </>
  );
};
