import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { Button } from '@mui/material';

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <ScopedCssBaseline>
      <Button onClick={handleRegister}>Register</Button>
      <Button onClick={handleLogin}>Login</Button>
      <ul>
        <li>
          <Link to="/userDashboard">User Dashboard</Link>
        </li>
        <li>
          <Link to="/adminDashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </ScopedCssBaseline>
  );
};
