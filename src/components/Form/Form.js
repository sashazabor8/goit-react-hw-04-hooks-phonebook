import React, { useState } from 'react';
import s from './Form.module.css';
import { nanoid } from 'nanoid';

function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.label}>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number:
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default Form;

//! хук для useState, но как по мне читабильнее тупо без него
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.currentTarget.value);
//   };

//   return {
//     value,
//     onChange: handleChange

// };
