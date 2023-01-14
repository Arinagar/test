import { React } from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

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
