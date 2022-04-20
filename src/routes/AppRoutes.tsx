import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { AdminDashboard } from '../pages/AdminDashboard';
import { Home } from '../pages/Home';
import { UserDashboard } from '../pages/UserDashboard';
import { SampleComponent } from '../reactQueryTools/SampleComponent';
import { UserAuth } from './UserAuth';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sampleComponent" element={<SampleComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/userDashboard"
        element={
          <UserAuth requiredRoles={['user', 'admin']}>
            <UserDashboard />
          </UserAuth>
        }
      />
      <Route
        path="/adminDashboard"
        element={
          <UserAuth requiredRoles={['admin']}>
            <AdminDashboard />
          </UserAuth>
        }
      />
    </Routes>
  );
};
