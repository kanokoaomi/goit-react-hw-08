import { useSelector } from "react-redux"
import { selectUserisLoggedIn, selectUserName } from "../../redux/auth/selectors"
import { Link } from "react-router-dom"
// import RegistrationPage from "./RegistrationPage"
import styles from "./HomePage.module.css"
import Section from "../../components/Section/Section"

const HomePage = () => {

    const userName = useSelector(selectUserName)
    const isLoggedIn = useSelector(selectUserisLoggedIn)

    return (
        <Section>
            <h1 className={styles.title}>Welcome, {userName ? userName : "friend"}!</h1>
            {!isLoggedIn &&
                <p>Please, {<Link to="/register">create an account</Link>} or {<Link to="/login">log in</Link>} to have an access to your personal contacts book!</p>}
            {isLoggedIn &&
                <div>
                    <p>I hope, you are enjoying this app😊</p>
                    <div className={styles.functional}>
                        <p><b>What can you do here?</b></p>
                        <ul className={styles.list}>
                            <li>Save your contacts</li>
                            <li>Delete them</li>
                            <li>There is a comfortable filter with which you can easyly find the contact by name or a number</li>
                            <li>Create different accounts, so you can save contacts of your collegs on the one account and numbers of your family and friends on the other one!</li>
                        </ul>
                    </div>
                </div>}
        </Section>
    )
}

export default HomePage