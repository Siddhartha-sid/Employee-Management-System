import React from 'react'

const TaskMain = ({data}) => {
    return (
        <div>
            <div className='taskmainbar'>
                <div className='newtask'>
                    <h2>{data.taskNumber.newTask}</h2>
                    <h3>New Task</h3>
                </div>
                <div className='Inprogess'>
                    <h2>{data.taskNumber.active}</h2>
                    <h3>Active Task</h3>
                </div>
                <div className='completedtask'>
                    <h2>{data.taskNumber.completed}</h2>
                    <h3>Completed Task</h3>
                </div>
                <div className='pending '>
                    <h2>{data.taskNumber.failed}</h2>
                    <h3>Failed Task </h3>
                </div>
            </div>
        </div>
    )
}

export default TaskMain
