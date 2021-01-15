import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem({ contact, removeContactById }) {
  return (
    <li className={styles.contact}>
      <div>
        <span className={styles['contact-name']}>{contact.name}:</span>
        <span className={styles['contact-number']}>{contact.number}</span>
      </div>

      <button
        className={styles['remove-btn']}
        onClick={() => removeContactById(contact.id)}
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

const mapDispatchToProps = dispatch => ({
  removeContactById: id => dispatch(actions.removeContactById(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
