import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const hasContactName = this.props.myContacts.some(item => {
      return item.name === name;
    });
    const hasContactNumber = this.props.myContacts.some(item => {
      return item.number === number;
    });

    if (hasContactName) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    if (hasContactNumber) {
      toast.error(`${number} is already in contacts`);
      return;
    }

    this.props.createContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <label className={styles.label}>
            {' '}
            Name
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              className={styles.input}
            ></input>
          </label>
          <label className={styles.label}>
            {' '}
            Number
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="111-11-11"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              className={styles.input}
            ></input>
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  myContacts: state.phonebook.items,
});

const mapDispatchToProps = dispatch => ({
  createContact: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
