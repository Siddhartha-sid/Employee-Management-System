import React from 'react'
import Header from './EmployeeComponent/Header'
import CreateTask from './AdminComponents/CreateTask'
import TaskListAdmin from './AdminComponents/TaskListAdmin'

const AdminDashboard = ({data,setUser,idx}) => {

    

  return (
    <div>
      <Header data={data} setUser={setUser} idx={idx}/>
      <CreateTask />
      <TaskListAdmin data={data} idx={idx}/>
    </div>
  )
}

export default AdminDashboard
