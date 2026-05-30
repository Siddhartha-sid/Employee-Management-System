import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className='assigncompletedtask'>
            <div className='head'>
              <h2>{data.category}</h2>
              <h1>Completed Task</h1>
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

export default CompletedTask
