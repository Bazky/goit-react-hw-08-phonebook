import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import { useAuth } from '../../auth/useAuth';
import { useNavigate } from 'react-router-dom';

export const UserMenu = user => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div>
      {isLoggedIn && <p>{user.email}</p>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};
