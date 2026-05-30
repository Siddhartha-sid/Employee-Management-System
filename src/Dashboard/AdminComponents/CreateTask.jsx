import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

    const { userdata, setuserData } = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [newTaskData, setNewTaskData] = useState([])

    const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    }

    const updatedData = [...userdata.employees]
    
    updatedData.forEach((elem) => {
        if (assignTo === elem.firstname) {
            elem.tasks.push(newTask)
            elem.taskNumber.newTask += 1
        }
    })
    const updatedEmployees = [...userdata.employees]
    setuserData({...userdata,employees: updatedEmployees
})
    
    localStorage.setItem(
        "employees",
        JSON.stringify(updatedData)
    )

    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
    
}
    return (
        <div>
            <div className='createmain'>
                <h2>Create Task</h2>
                <div className='createTask'>
                    <form onSubmit={(e) => {
                        handleSubmit(e)
                    }}>
                        <div className='taskdiv'>
                            <div>
                                <label>Task Title</label>
                                <input
                                    value={taskTitle}
                                    onChange={(e) => {
                                        setTaskTitle(e.target.value)
                                    }}
                                    type='text' placeholder='Enter task title'
                                />
                                <br />
                                <label>Date</label>
                                <input
                                    value={taskDate}
                                    onChange={(e) => {
                                        setTaskDate(e.target.value)
                                    }}
                                    type='date' placeholder='dd/mm/yyyy' />
                                <br />
                                <label>Assign to </label>
                                <input
                                    value={assignTo}
                                    onChange={(e) => {
                                        setAssignTo(e.target.value)
                                    }}
                                    type="text" placeholder='Enter employee name'
                                />
                                <br />
                                <label>Category</label>
                                <input
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}
                                    type="text" placeholder='Enter category : design , dev , etc. ' />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea
                                    value={taskDescription}
                                    onChange={(e) => {
                                        setTaskDescription(e.target.value)
                                    }}
                                    placeholder='Enter task description' />
                            </div>
                        </div>
                        <div>
                            <button type='submit'>Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
