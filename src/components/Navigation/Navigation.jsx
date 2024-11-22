import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { selectUserisLoggedIn } from "../../redux/auth/selectors"

const Navigation = () => {
    const isLoggedIn = useSelector(selectUserisLoggedIn)
    // const userName = useSelector(selectUserName)

    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)}>Home</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} end>Contacts Book</NavLink>

            {isLoggedIn && <button>Log Out</button>}
        </nav>
    )
}

export default Navigation