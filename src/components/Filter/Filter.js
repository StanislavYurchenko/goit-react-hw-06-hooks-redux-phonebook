import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
  return (
    <>
      <div className={styles.description}>Find contacts by name</div>
      <input
        className={styles.input}
        onChange={e => onChangeFilter(e)}
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

const mapStateToProps = state => ({
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(actions.onChangeFilter(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
