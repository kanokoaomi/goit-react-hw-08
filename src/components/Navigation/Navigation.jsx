import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)}>Home</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} end>Contacts Book</NavLink>
        </nav>
    )
}

export default Navigation