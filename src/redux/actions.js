import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { API } from '../Api';

export const setFilter = createAction('filter/set');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch(`${API}/contacts`);
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
    const response = await fetch(`${API}/contacts`, {
      method: 'POST',
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
    const response = await fetch(`${API}/contacts/${contactId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete the contact.');
    }
    return contactId;
  }
);

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
