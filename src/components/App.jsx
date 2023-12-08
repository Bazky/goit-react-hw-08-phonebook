import { useDispatch } from 'react-redux';
import Contacts from './Contacts/Contacts';
import { UserMenu } from './UserMenu/UserMenu';
import { useAuth } from '../auth/useAuth';
import { Navigation } from './Navigation';
import { useEffect } from 'react';
import { current } from '../redux/actions';

export const App = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing...</p>;
  }

  return (
    <>
      {isLoggedIn === true ? (
        <div>
          <UserMenu />
          <Contacts />
        </div>
      ) : (
        <Navigation />
      )}
    </>
  );
};
