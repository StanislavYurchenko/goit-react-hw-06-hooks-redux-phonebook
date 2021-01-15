import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { setContacts } from '../../api/localStorageApi';
import styles from './PhoneBook.module.css';

function PhoneBook({ contacts }) {
  useEffect(() => {
    setContacts(contacts);
  }, [contacts]);

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

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

export default connect(mapStateToProps, null)(PhoneBook);
