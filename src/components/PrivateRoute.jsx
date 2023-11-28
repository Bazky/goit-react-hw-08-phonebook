import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
