import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ data ,setUser }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
    localStorage.removeItem("loggedInUser")
    window.location.reload()
}

  return (
    <div>
      <div className='headerSection'>
        <h3>Hello <br /><span>{data?.firstname ?? "User"}👋</span></h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Header