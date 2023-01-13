import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'number') setNumber(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();

    const isSuccess = addNewContact({
      name: name.trim().toLowerCase(),
      number,
      id: nanoid(10),
    });
    if (isSuccess) {
      setName('');
      setNumber('');
    }
  };

  return (
    <div className={css.form}>
      <form onSubmit={onSubmitForm}>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, A"
            value={name}
            required
            onChange={onInputChange}
            className={css.input}
          />
        </label>
        <label>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
