import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';
import { Layout } from '@neogrid/design-system';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};
