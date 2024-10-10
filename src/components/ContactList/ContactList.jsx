import Contact from "../Contact/Contact"

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <li key={contact.id}>
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
