import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth/Login/Login';
import { Register } from '../auth/Register/Register';
import { UserInfo } from '../auth/UserInfo/UserInfo';
import { SampleComponent } from '../reactQueryTools/SampleComponent';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SampleComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userInfo" element={<UserInfo />} />
    </Routes>
  );
};
