import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';
import { selectIsLoading, selectError } from './redux/selectors';
import { selectContacts } from './redux/selectors';
import { fetchContacts } from './redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
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
