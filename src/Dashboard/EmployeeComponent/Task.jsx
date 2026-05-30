import React from 'react'

const Task = (props) => {
  
  console.log(props.task)
  return (
    <div>
      <div className={props.level}>
            <div className='head'>
              <h2>{props.level}</h2>
              <h3>{props.date}</h3>
            </div>
            <h2><span>{props.title}</span></h2>
            <p>{props.description}
            </p>
        </div>
    </div>
  )
}

export default Task
