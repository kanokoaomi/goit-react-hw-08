import { useDispatch } from "react-redux";

import styles from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const onDeleteContact = (contactId) => {
        const action = deleteContact(contactId)
        dispatch(action)
    }
    return (
        <>
            <div>
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>{number}</p>
            </div>
            <button className={styles.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </>
    )
}

export default Contact
