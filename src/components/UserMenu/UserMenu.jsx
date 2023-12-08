import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import { useAuth } from '../../auth/useAuth';

export const UserMenu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div>
      {isLoggedIn && <p>{user.user.email}</p>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};
