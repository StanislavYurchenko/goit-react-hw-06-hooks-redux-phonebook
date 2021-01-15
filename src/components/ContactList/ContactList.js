import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList({ contacts, filter }) {
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

ContactList.defaultProps = {
  contacts: {
    number: '',
  },
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter,
});

export default connect(mapStateToProps, null)(ContactList);
