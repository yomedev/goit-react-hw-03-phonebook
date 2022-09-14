import React from 'react'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={_ => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  removeContact: PropTypes.func.isRequired
};