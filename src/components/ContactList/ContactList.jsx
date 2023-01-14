import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContact } from 'components/redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={css.list_item}>
            {el.name}: {el.number}
            <button
              type="button"
              onClick={() => {
                const action = deleteContact(el.id);
                dispatch(action);
              }}
              className={css.list_button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
