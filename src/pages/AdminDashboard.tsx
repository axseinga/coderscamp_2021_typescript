import React from 'react';
import { useAuth } from '../context/authContext';

export const AdminDashboard = () => {
  const { logout } = useAuth();
  return (
    <>
      <h1>Admin Path</h1>
      <button onClick={logout}>Log out</button>
    </>
  );
};
