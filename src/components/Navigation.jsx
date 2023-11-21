import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserSignup } from './UserSignup/UserSignup';
import { UserLogin } from './UserLogin/UserLogin';
import { useAuth } from '../auth/useAuth';

export const Navigation = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshin user...</b>
  ) : (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
