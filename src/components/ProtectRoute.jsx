import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const ProtectedRoute = ({ element: Component, redirect }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirect} /> : Component;
};
