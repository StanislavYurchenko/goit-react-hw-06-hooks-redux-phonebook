import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <div>
        <span className={styles['contact-name']}>{contact.name}:</span>
        <span className={styles['contact-number']}>{contact.number}</span>
      </div>

      <button
        className={styles['remove-btn']}
        onClick={() => dispatch(actions.removeContactById(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }),
  removeContactById: PropTypes.func.isRequired,
};

export default ContactListItem;
