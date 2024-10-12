import styles from "./Contact.module.css"

const Contact = ({ id, name, number, onDeleteContact }) => {
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
