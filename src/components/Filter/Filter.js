import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.description}>Find contacts by name</div>
      <input
        className={styles.input}
        onChange={event => dispatch(actions.onChangeFilter(event.target.value))}
        value={filter}
        name="filter"
        type="text"
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
