import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Suspense, useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import { selectUserisRefreshing } from "./redux/auth/selectors"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"
// import UserMenu from "./components/UserMenu/UserMenu"
import AppBar from "./components/AppBar/AppBar"

import PrivateRoute from "./components/PrivateRoute"
import RestrictedRoute from "./components/RestrictedRoute"


const App = () => {

  const isRefreshing = useSelector(selectUserisRefreshing)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  if (isRefreshing) {
    return (
      <>
        <AppBar />
        <div>Loading...</div>
      </>
    )
  }

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
