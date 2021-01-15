import { combineReducers } from 'redux';
import { getContacts } from '../../api/localStorageApi';
import actionTypes from './counter-types';

const contactsReducer = (state = getContacts(), { type, payload }) => {
  switch (type) {
    case actionTypes.REMOVE_CONTACT:
      const result = state.filter(({ id }) => id !== payload);
      return result;

    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
