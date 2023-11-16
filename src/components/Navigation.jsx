import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserSignup } from './UserSignup/UserSignup';
import { UserLogin } from './UserLogin/UserLogin';
import { ContactList } from './ContactList/ContactList';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="contacts" element={<ContactList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
