import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  const contacts = useSelector(state => state.contacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFindChange = inputValue => {
    setFilter(inputValue);
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
      <ContactForm />

      {contacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>There are no contacts in your list</p>
      )}
    </div>
  );
};
