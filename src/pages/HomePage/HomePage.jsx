import { useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"
import { Link } from "react-router-dom"
// import RegistrationPage from "./RegistrationPage"
import styles from "./HomePage.module.css"
import Section from "../../components/Section/Section"

const HomePage = () => {

    const userName = useSelector(selectUserName)

    return (
        <Section>
            <h1 className={styles.title}>Welcome, {userName ? userName : "friend"}!</h1>
            <p>Please, {<Link to="/register">create an account</Link>} or {<Link to="/login">log in</Link>} to have an access to your personal contact book!</p>

        </Section>
    )
}

export default HomePage