import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    return (
        <ul className={styles.listOfContacts}>
            {contacts.map((contact) => {
                return (
                    <li className={styles.wrapper} key={contact.id}>
                        <Contact
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList
