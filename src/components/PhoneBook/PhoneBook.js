import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { setContacts } from '../../api/localStorageApi';
import styles from './PhoneBook.module.css';

function PhoneBook({ contacts, onChangeFilter, filter }) {
  useEffect(() => {
    setContacts(contacts);
  }, [contacts]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
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
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  removeContactById: id => dispatch(actions.removeContactById(id)),
  addContact: newContact => dispatch(actions.addContact(newContact)),
  onChangeFilter: event => dispatch(actions.onChangeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
