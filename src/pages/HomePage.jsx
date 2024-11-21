import { useSelector } from "react-redux"
import { selectUser } from "../redux/auth/selectors"
import { Link } from "react-router-dom"
// import RegistrationPage from "./RegistrationPage"


const HomePage = () => {

    const userName = useSelector(selectUser)

    return (
        <div>
            <h1>Welcome, {userName ? userName : "friend"}!</h1>
            <p>Please, {<Link to="/register">create an account</Link>} or {<Link to="/login">log in</Link>} to have an access to your personal contact book!</p>

        </div>
    )
}

export default HomePage