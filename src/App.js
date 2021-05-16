import React from 'react';
import styles from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => (
  <div className={styles.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
