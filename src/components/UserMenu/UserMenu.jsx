import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"
import styles from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <button className={styles.buttonLogOut} type="button" onClick={onLogout}>Log Out</button>
    )
}

export default UserMenu