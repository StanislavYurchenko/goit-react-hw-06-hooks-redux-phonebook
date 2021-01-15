import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phoneBook-actions';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.phoneBook.contacts);
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        toast.error(`There are no type input "${name}"`);
    }
  };

  const isExistContact = name => {
    return contacts.some(contact => contact.name === name);
  };

  const onSubmit = event => {
    event.preventDefault();

    const normalizedName = name.trim();
    if (isExistContact(name)) {
      return toast.error(`"${normalizedName}" contact already exists`);
    }
    if (!normalizedName) {
      return toast.error('Enter contact name');
    }
    dispatch(addContact({ name: normalizedName, number, id: uuidv4() }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Name</h3>
      <input
        className={styles.input}
        name="name"
        value={name}
        onChange={onChange}
        type="text"
      />

      <h3>Number</h3>
      <input
        className={styles.input}
        name="number"
        value={number}
        onChange={onChange}
        type="text"
      />

      <button className={styles['remove-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
