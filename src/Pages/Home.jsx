import React from 'react'
import EmployeeDashboard from '../Dashboard/EmployeeDashboard'
import AdminDashboard from '../Dashboard/AdminDashboard'
import Login from './Login'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {

  
  return (
    
    <div className='homeMain'>
      <Navbar />
      <h1>Welcome to Employee Management System</h1>
    </div>
  )
}

export default Home
