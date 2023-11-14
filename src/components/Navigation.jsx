import React from 'react';
import { Router, Routes, Route } from 'react-router';
import { UserSignup } from './UserSingup/UserSignup';
import { UserLogin } from './UserLogin/UserLogin';
import { ContactList } from './ContactList/ContactList';

export const Navigation = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contacts" element={<ContactList />} />
        </Routes>
      </div>
    </Router>
  );
};
