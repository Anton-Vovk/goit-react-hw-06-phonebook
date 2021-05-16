import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => {
    const id = state.findIndex(contact => contact.id === payload);
    return [...state.slice(0, id), ...state.slice(id + 1)];
  },
});

const filter = createReducer('', {
  [filterContacts]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
