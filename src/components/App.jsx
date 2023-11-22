import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilter,
} from '../redux/actions';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const [success, setSuccess] = useState();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      {success ? (
        <div>
          <UserMenu />
          <h1>Phonebook</h1>
          <ContactForm contacts={contacts} onAddContact={handleAddContact} />
          <h2>Contacts</h2>
          <h5>Find contacts by name</h5>
          <Filter filter={filter} onFilterChange={handleFilterChange} />
          <ContactList onDeleteContact={handleDeleteContact} />
        </div>
      ) : (
        <Navigation />
      )}
    </>
  );
};
