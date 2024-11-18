import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"
import { selectContacts } from "../../redux/selectors"
import { selectFilteredContacts } from "../../redux/contactsSlice"

const ContactList = ({ onDeleteContact }) => {
    const contacts = useSelector(selectContacts)
    const filteredContacts = useSelector(selectFilteredContacts)
    // const filteredContacts = contacts.filter((contact) => {
    //     return contact.name.toLowerCase().includes(filters.toLowerCase().trim())

    // })
    return (
        <ul className={styles.listOfContacts}>
            {Array.isArray(contacts) && contacts.length !== 0 && filteredContacts.map((contact) => {
                return (
                    <li className={styles.wrapper} key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onDeleteContact={onDeleteContact}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList
