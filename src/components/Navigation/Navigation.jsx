import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { selectUserisLoggedIn } from "../../redux/auth/selectors"

const Navigation = () => {

    const isLoggedIn = useSelector(selectUserisLoggedIn)
    return (
        <div className={styles.mainNav}>
            <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)}>Home</NavLink>
            {isLoggedIn &&
                <NavLink to="/contacts" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} end>My Contacts</NavLink>}
        </div>
    )
}

export default Navigation