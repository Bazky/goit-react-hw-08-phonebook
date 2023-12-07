import { Contacts } from './Contacts/Contacts';
import { UserMenu } from './UserMenu/UserMenu';
import { useAuth } from '../auth/useAuth';
import { Navigation } from './Navigation';

export const App = () => {
  const { isLoggedIn } = useAuth();

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
