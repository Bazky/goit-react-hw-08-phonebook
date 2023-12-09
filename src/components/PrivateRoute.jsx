import { useAuth } from '../auth/useAuth';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : null;
};
