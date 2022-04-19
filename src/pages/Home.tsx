import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

export const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };
  return (
    <ScopedCssBaseline>
      <h2>Home</h2>
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleLoginClick}>Login</button>
      <ul>
        <li>
          <Link to="/UserDashboard">User Dashboard</Link>
        </li>
        <li>
          <Link to="/AdminDashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </ScopedCssBaseline>
  );
};
