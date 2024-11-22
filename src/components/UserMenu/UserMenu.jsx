import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./UserMenu.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectUserisLoggedIn } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

const UserMenu = () => {
    const isLoggedIn = useSelector(selectUserisLoggedIn)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)}>Home</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} end>Contacts Book</NavLink>

            {isLoggedIn && <button type="button" onClick={onLogout} >Log Out</button>}
        </nav>
    )
}

export default UserMenu