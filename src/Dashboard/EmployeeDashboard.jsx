import React from 'react'
import Header from './EmployeeComponent/Header'
import TaskMain from './EmployeeComponent/TaskMain'
import TaskList from './EmployeeComponent/TaskList'

const EmployeeDashboard = ({data}) => {

  return (
    <div>
      
      <Header data = {data}/>
      <TaskMain data = {data}/>
      <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
