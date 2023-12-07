import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const UserSignup = lazy(() => import('./UserSignup/UserSignup'));
const UserLogin = lazy(() => import('./UserLogin/UserLogin'));

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/register" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={<Contacts />} redirect="/login" />
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
