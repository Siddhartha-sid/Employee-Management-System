import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../../Context/AuthProvider'

const TaskListAdmin = () => {

    const AuthData = useContext(AuthContext)

    return (
        <div className='mainThing'>
            <h1>
                Task List
            </h1>
            
            <div className='adminTaskList'>
                <h2>Employee Name </h2>
                <h2>New Task </h2>
                <h2>Active Task </h2>
                <h2>Completed Task </h2>
                <h2>Failed Task </h2>
            </div>
            <br></br>
            <div className='taskMap'>
                {AuthData.userdata.employees.map((elem, idx) => (
                    <div key={idx} className='insideMap'>
                        <h2>{elem.firstname}</h2>
                        <h2>{elem.taskNumber.newTask}</h2>
                        <h2>{elem.taskNumber.active}</h2>
                        <h2>{elem.taskNumber.completed}</h2>
                        <h2>{elem.taskNumber.failed}</h2>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default TaskListAdmin
