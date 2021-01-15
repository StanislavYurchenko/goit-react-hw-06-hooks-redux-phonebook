import { createAction } from '@reduxjs/toolkit';

export const removeContactById = createAction('phoneBook/removeContactById');
export const addContact = createAction('phoneBook/addContact');
export const onChangeFilter = createAction('phoneBook/onChangeFilter');
