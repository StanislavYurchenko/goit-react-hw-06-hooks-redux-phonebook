import actionTypes from './counter-types';

export const removeContactById = id => ({
  type: actionTypes.REMOVE_CONTACT,
  payload: id,
});

export const addContact = newContact => ({
  type: actionTypes.ADD_CONTACT,
  payload: newContact,
});

export const onChangeFilter = value => ({
  type: actionTypes.FILTER_CONTACTS,
  payload: value,
});
