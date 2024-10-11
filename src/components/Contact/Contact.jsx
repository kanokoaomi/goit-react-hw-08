import styles from "./Contact.module.css"

const Contact = ({ name, number }) => {
    return (
        <>
            <div>
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>{number}</p>
            </div>
            <button className={styles.button} type="button">Delete</button>
        </>
    )
}

export default Contact
