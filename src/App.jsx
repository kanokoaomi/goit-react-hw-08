import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactsPage from "./pages/ContactsPage"
import UserMenu from "./components/UserMenu/UserMenu"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import { selectUserisRefreshing } from "./redux/auth/selectors"


const App = () => {

  const isRefreshing = useSelector(selectUserisRefreshing)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  // if (isRefreshing) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <UserMenu />
      {isRefreshing && <div>Loading...</div>}
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
