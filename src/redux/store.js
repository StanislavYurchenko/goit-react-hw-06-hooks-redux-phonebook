import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

// const store = configureStore({ reducer: rootReducer });

export default store;
