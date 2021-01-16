import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/phoneBook/phoneBook-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './PhoneBook.module.css';

function PhoneBook() {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm />

      {contacts?.length > 0 && (
        <>
          <h2 className={styles['sub-title']}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default PhoneBook;
