import { useState } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import { useEffect } from "react";

export const App = () => {
  const [contacts, setContacts] = useState([])

  const [filter, setFilter] = useState('')

  useEffect(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'))
    if (contactsFromLS) {
      setContacts(contactsFromLS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`)
      return
    }
    setContacts([...contacts, { id: nanoid(), name, number }])
  }

  const removeContact = (contactId) => {
    setContacts(contacts.filter(({ id }) => id !== contactId))
  }

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1 style={{ fontSize: 24 }}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 style={{ fontSize: 20 }}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
};
