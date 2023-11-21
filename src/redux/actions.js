import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'http://localhost:3000';

// const const const
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};
// const const const

export const setFilter = createAction('filter/set');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch('/contacts');
    if (!response.ok) {
      throw new Error('Failed to fetch contacts.');
    }
    const data = await response.json();
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const response = await axios.post('/contacts', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
    if (!response.ok) {
      throw new Error('Failed to add a contact.');
    }
    const data = await response.json();
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    if (!response.ok) {
      throw new Error('Failed to delete the contact.');
    }
    return contactId;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentials
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

setFilter.propTypes = {
  payload: PropTypes.string.isRequired,
};

addContact.propTypes = {
  payload: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

deleteContact.propTypes = {
  payload: PropTypes.string.isRequired,
};

register.propTypes = {
  payload: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

logIn.propTypes = {
  payload: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

logOut.propTypes = {
  payload: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
