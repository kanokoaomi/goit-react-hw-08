import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = ({ onDeleteContact }) => {
    const contacts = useSelector((state) => state.contacts.items)
    const filters = useSelector((state) => state.filters.name)
    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filters.toLowerCase().trim())

    })
    return (
        <ul className={styles.listOfContacts}>
            {filteredContacts.map((contact) => {
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
