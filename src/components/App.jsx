import { React, useState, useEffect } from 'react';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFindChange = inputValue => {
    setFilter(inputValue);
  };

  const addNewContact = newContact => {
    if (contacts.find(el => el.name === newContact.name)) {
      alert(`${newContact.name} has already exists`);
      return false;
    }
    setContacts(prev => [...prev, newContact]);

    return true;
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const getFilteredContacts = () => {
    const normalize = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().trim().includes(normalize);
    });
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <ContactForm addNewContact={addNewContact} />

      {contacts.length ? (
        <>
          <Filter onFilterInput={onFindChange} />
          <ContactsList
            filteredContacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </>
      ) : (
        <p>There are no contacts in your list</p>
      )}
    </div>
  );
};
