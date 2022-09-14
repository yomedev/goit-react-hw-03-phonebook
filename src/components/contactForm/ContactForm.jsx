import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const clickHandler = e => {
    e.preventDefault()
    addContact(name, number)
    setName('')
    setNumber('')
  }
  return (
    <form className={styles['contact-form']}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button onClick={clickHandler}>Add contact</button>
    </form>
  )
}

export default ContactForm

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
};