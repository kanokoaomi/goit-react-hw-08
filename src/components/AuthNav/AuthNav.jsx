import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
    return (
        <div className={styles.loginButtons}>
            <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} to="/register">
                Register
            </NavLink>
            <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} to="/login">
                Log in
            </NavLink>
        </div>
    );
};

export default AuthNav;