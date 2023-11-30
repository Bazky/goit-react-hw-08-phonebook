import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const PrivateRoute = ({ component: Component, redirect = '/login' }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirect} /> : Component;
};
