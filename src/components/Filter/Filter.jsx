import css from './Filter.module.css';

export const Filter = () => {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => console.log(event.target.value)}
        placeholder="Search contacts"
      />
    </div>
  );
};
