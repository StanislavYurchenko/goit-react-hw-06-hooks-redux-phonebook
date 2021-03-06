import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { getFilteredContacts } from 'redux/phoneBook/phoneBook-selectors';
import styles from './ContactList.module.css';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
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
