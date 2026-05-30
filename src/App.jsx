import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import EmployeeDashboard from './Dashboard/EmployeeDashboard'
import AdminDashboard from './Dashboard/AdminDashboard'
import Error from './Pages/Error'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    if (!AuthData.userdata) return
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData)
      if (userData.role === "admin") {
        setLoggedInUserData(AuthData.userdata.admin)
      } else {
        const employee = AuthData.userdata.employees.find(e => e.email === userData.email)
        setLoggedInUserData(employee || null)
      }
    }
    setLoading(false)
  }, [AuthData.userdata])

  if (loading) return null

  const handleLogin = (email, password) => {
    if (!AuthData.userdata) return alert("Auth data not available")

    if (email === AuthData.userdata.admin.email && password === AuthData.userdata.admin.password) {
      setUser({ role: "admin", email: AuthData.userdata.admin.email })
      setLoggedInUserData(AuthData.userdata.admin)
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", email: AuthData.userdata.admin.email }))
    } else {
      const employee = AuthData.userdata.employees.find(e => e.email === email && e.password === password)
      if (employee) {
        setUser({ role: "employee", email: employee.email })
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", email: employee.email }))
      } else {
        alert("Invalid credentials")
      }
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            !user ? (
              <Login handleLogin={handleLogin} />
            ) : user.role === "admin" ? (
              <Navigate to="/admin" replace />
            ) : (
              <Navigate to="/employee" replace />
            )
          }
        />

        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <AdminDashboard 
              data={loggedInUserData} 
              setUser={setUser}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/employee"
          element={
            user?.role === "employee" ? (
              <EmployeeDashboard
              data={loggedInUserData} 
              setUser={setUser}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App