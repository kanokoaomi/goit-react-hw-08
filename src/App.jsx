import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactsPage from "./pages/ContactsPage"
import Navigation from "./components/Navigation/Navigation"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}

export default App
