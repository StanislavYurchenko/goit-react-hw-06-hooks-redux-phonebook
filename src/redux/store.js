import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const reducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
