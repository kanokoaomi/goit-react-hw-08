import { useSelector } from 'react-redux'
import { selectUserisLoggedIn } from '../../redux/auth/selectors'

import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'

import styles from "./AppBar.module.css"

const AppBar = () => {

    const isLoggedIn = useSelector(selectUserisLoggedIn)

    return (
        <header className={styles.navigation}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar