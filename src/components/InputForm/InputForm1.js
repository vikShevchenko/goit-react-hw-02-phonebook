import React, { Component } from 'react';
import css from './InputForm.module.css';
import { nanoid } from 'nanoid';
let dat = nanoid(5);
console.log(dat);

export class InputForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  hendleInputChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  addToContact = () => {
    this.setState({
      contacts: [...this.state.contacts, this.state.name],
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h3>Phonebook</h3>
        <div className={css.inputForm}>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.hendleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button onClick={this.addToContact}>Add contact</button>
        </div>
        <ul>
          {this.state.contacts.map(val => (
            <li key={(dat = nanoid(3))}>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InputForm;
