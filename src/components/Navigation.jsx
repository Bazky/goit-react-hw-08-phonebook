import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};
