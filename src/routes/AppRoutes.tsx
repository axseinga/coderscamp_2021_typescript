import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { AdminDashboard } from '../pages/AdminDashboard';
import { Home } from '../pages/Home';
import { UserDashboard } from '../pages/UserDashboard';
import { SampleComponent } from '../reactQueryTools/SampleComponent';
import { UserAuth } from './UserAuth';
import { AdminAuth } from './AdminAuth';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SampleComponent" element={<SampleComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/UserDashboard"
        element={
          <UserAuth>
            <UserDashboard />
          </UserAuth>
        }
      />
      <Route
        path="/AdminDashboard"
        element={
          <AdminAuth>
            <AdminDashboard />
          </AdminAuth>
        }
      />
    </Routes>
  );
};
