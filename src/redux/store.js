import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';
import PropTypes from 'prop-types';

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: authReducer,
  },
});

export default store;

store.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ),
};
