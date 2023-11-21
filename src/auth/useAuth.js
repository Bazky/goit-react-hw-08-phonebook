import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from './selectors';
import PropTypes from 'prop-types';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return isLoggedIn, isRefreshing, user;
};

useAuth.propTypes = {
  isLoggedIn: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};
