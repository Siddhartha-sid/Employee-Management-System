import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Employee Management System</h1>
      <div className='navbar_main'>
        <Link to='/'>EMS</Link>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
