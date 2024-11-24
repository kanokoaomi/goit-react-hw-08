import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth/operations"
import styles from "./UserMenu.module.css"
import { selectUserName } from "../../redux/auth/selectors"

const UserMenu = () => {
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
    }
    const userName = useSelector(selectUserName)
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Welcome, {userName ? userName : "friend"}!</h3>
            <button className={styles.buttonLogOut} type="button" onClick={onLogout}>Log Out</button>
        </div>
    )
}

export default UserMenu