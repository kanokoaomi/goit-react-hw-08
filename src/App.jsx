import { useEffect, useState } from 'react'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { nanoid } from 'nanoid'


const App = () => {
  const originalContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

  const localStorageValue = localStorage.getItem('contacts')

  const [contacts, setContact] = useState(() => {
    const parsedValue = JSON.parse(localStorageValue)
    return parsedValue ?? originalContacts
  })
  const [inputValue, setInputValue] = useState("")

  const onAddContact = (formData) => {
    const finalContacts = {
      ...formData,
      id: nanoid()
    }
    setContact((previousListOfContacts) => [...previousListOfContacts, finalContacts])
    // originalContacts = [...originalContacts, finalContacts];
    // originalContacts.push(finalContacts)
  }

  const onDeleteContact = (contactId) => {
    const contactsWithoutDeletedContact = contacts.filter((contact) => contact.id !== contactId)
    setContact(contactsWithoutDeletedContact)
  }

  // console.log(originalContacts)
  // console.log(displayedContacts)
  const handleChange = (event) => {
    setInputValue(event.target.value);
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase().trim())
    })
    setContact(event.target.value === '' ? originalContacts : filteredContacts);
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div>
      <h1 style={{ marginLeft: "40px" }}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox
        inputValue={inputValue}
        handleChange={handleChange} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </div>
  )
}

export default App
