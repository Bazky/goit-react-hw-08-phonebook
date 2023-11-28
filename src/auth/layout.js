import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

const AuthenticatedNav = () => {
  <>
    <Link to="/contacts">Contacts</Link>
    <Link to="/logout">Logout</Link>
  </>;
};

const UnauthenticatedNav = () => {
  <>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </>;
};

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
      </nav>
    </div>
  );
};
