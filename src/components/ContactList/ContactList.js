import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
      )
    : contacts;

  return (
    <>
      <ul className={styles.contacts}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
