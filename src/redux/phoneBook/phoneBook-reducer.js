import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phoneBook-actions';

const contactsReducer = createReducer([], {
  [actions.removeContactById]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.addContact]: (state, { payload }) => [...state, payload],
});

const filterReducer = createReducer('', {
  [actions.onChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
