import React from 'react';
import { useAuth } from '../context/authContext';

export const UserDashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <h1>User Dashboard</h1>
      <button onClick={() => logout()}>Log out</button>
    </>
  );
};
