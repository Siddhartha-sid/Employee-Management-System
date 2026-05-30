import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='assignfailedtask'>
            <div className='head'>
              <h2>{data.category}</h2>
              <h1>Failed Task</h1>
              <h3>{data.taskDate}</h3>
            </div>
            <h2><span>{data.taskTitle}</span></h2>
            <p>{data.taskDescription}
            </p>
            <div className='activebutton'>
              <button className='b1'>Completed Task</button>
              <button className='b2'>Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask
