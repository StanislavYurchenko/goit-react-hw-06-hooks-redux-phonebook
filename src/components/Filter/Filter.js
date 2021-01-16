import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from '../../redux/phoneBook/phoneBook-actions';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.description}>Find contacts by name</div>
      <input
        className={styles.input}
        onChange={event => dispatch(onChangeFilter(event.target.value))}
        value={filter}
        name="filter"
        type="text"
      />
    </>
  );
}

export default Filter;
