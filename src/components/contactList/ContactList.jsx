import React from 'react'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles['contact-list']}>
      {contacts.map(({id, name, number}) => (
        <li key={id}>
          {name}: {number}
          <button onClick={_ => removeContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  })).isRequired,
  removeContact: PropTypes.func.isRequired
};