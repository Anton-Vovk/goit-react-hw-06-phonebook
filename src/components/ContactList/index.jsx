import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            {name} - {number}
            <button
              className={styles.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const contactFilter = (contacts, filterStr) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStr.toLowerCase()),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.phonebook;

  return {
    contacts: contactFilter(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
