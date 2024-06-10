import { useState, useEffect } from 'react'
import contactsObj from '../../../contacts.json'
import css from './App.module.css'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'

const getContacts = () => {
    const savedContacts = localStorage.getItem("contact-key");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
  return contactsObj
  };

function App() {
  
 const [filter, setFilter] = useState('')
  const [contacts, setContact] = useState(getContacts)

  useEffect(() => {
    localStorage.setItem("contact-key", JSON.stringify(contacts))
  }, [contacts])

  const addContact = newContact => {
    setContact (contactsBefore => [...contactsBefore, newContact]);
  };

  const deleteContact = id => {
    setContact(contactsBefore => { return contactsBefore.filter(contact => contact.id !== id) });
  };

  const contactsFilter = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <div>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox filter={filter} onFilter={setFilter} />
        <ContactList contacts={contactsFilter} onDelete={deleteContact} />
      </div>
  )
}

export default App
