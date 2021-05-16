import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('DELETE_CONTACT');
const filterContacts = createAction('FILTER_CONTACTS');

export { addContact, deleteContact, filterContacts };
