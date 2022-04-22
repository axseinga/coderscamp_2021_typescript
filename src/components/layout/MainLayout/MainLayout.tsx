import React from 'react';
import { MainLayoutProps } from './types';
import { Header } from '../Header/Header';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
