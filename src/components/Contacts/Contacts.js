import React from 'react';
import s from './Contacts.module.css';

function Statistics({ contacts, removeContacts }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={s.contactsBtn}
              onClick={() => removeContacts(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Statistics;
