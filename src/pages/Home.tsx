import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };
  return (
    <>
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
    </>
  );
};
