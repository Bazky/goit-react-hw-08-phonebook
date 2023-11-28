import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ProtectedRoute } from './ProtectRoute';
import { Layout } from 'auth/layout';

const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
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
            <Route path="/" element={<Layout />} />
            <Route
              path="/register"
              element={
                <ProtectedRoute element={<UserSignup />} redirect="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute element={<UserLogin />} redirect="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={<ContactForm />} redirect="/login" />
              }
            />
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
