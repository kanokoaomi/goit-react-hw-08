import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.listOfContacts}>
            {contacts.map((contact) => {
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
