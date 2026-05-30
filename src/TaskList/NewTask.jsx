import React from 'react'

const NewTask = ({data}) => {
  return (
<div className='newassigntask'>
            <div className='head'>
              <h2>{data.category}</h2>
              <h1>New Task</h1>
              <h3>{data.taskDate}</h3>
            </div>
            <h2><span>{data.taskTitle}</span></h2>
            <p>{data.taskDescription}
            </p>
            <div className='activebutton'>
              <button className='b1'>Accept Task</button>
              <button className='b2'>Failed Task</button>
            </div>
        </div>
  )
}

export default NewTask
