// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../auth/useAuth';
// import { ContactList } from './ContactList/ContactList';

// export const PrivateRoute = ({
//   component: Component,
//   redirectTo = '/contacts',
// }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : <ContactList />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   redirectTo: PropTypes.string,
// };
