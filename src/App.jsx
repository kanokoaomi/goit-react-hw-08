// import { useEffect, useState } from 'react'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
// import { nanoid } from 'nanoid'
// import { useDispatch, useSelector } from 'react-redux'
// import { addContact } from './redux/contactsSlice'

const App = () => {
  // const originalContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]

  // const contacts = useSelector((state) => state.contacts.items)

  // const localStorageValue = localStorage.getItem('contacts')

  // const [contacts, setContact] = useState(() => {
  //   const parsedValue = JSON.parse(localStorageValue)
  //   return parsedValue ?? contacts
  // })
  // const [inputValue, setInputValue] = useState("")


  // const onAddContact = (formData) => {
  //   const finalContacts = {
  //     ...formData,
  //     id: nanoid()
  //   }
  //   const action = addContact(finalContacts)
  //   dispatch(action)
  //   // setContact((previousListOfContacts) => [...previousListOfContacts, finalContacts])
  // }

  // const onDeleteContact = (contactId) => {
  //   // const contactsWithoutDeletedContact = contacts.filter((contact) => contact.id !== contactId)
  //   // setContact(contactsWithoutDeletedContact)
  //   const action = addContact(contactId)
  //   dispatch(action)
  // }

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  return (
    <div>
      <h1 style={{ marginLeft: "40px" }}>Phonebook</h1>
      <ContactForm
      // onAddContact={onAddContact}
      />
      <SearchBox
      // inputValue={filter}
      // handleChange={setInputValue}
      />
      <ContactList
      // onDeleteContact={onDeleteContact}
      />
    </div>
  )
}

export default App
