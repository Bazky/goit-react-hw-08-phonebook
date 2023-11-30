import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const ContactList = lazy(() => import('./ContactList/ContactList'));
const UserSignup = React.lazy(() => import('./UserSignup/UserSignup'));
const UserLogin = React.lazy(() => import('./UserLogin/UserLogin'));

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
                <PrivateRoute element={<ContactList />} redirect="/login" />
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
