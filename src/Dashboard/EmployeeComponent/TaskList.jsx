import React from 'react'
import Task from './Task'
import ActiveTask from '../../TaskList/ActiveTask'
import NewTask from '../../TaskList/NewTask'
import CompletedTask from '../../TaskList/CompletedTask'
import FailedTask from '../../TaskList/FailedTask'

const TaskList = ({ data }) => {

  return (
    <div>
      <div className='tasklist'>
        <h2>Task List</h2>
        <div className='tasks'>
          {data.tasks.map((elem, idx) => {

            if (elem.newTask) {
              return <NewTask key={idx} data={elem} />
            }

            if (elem.active){
              return <ActiveTask key={idx} data={elem} />
            }
            
            if (elem.completed) {
              return <CompletedTask key={idx} data={elem} />
            }

            if (elem.failed){
              return <FailedTask key={idx} data={elem} />
            }
          })
          }
        </div>
      </div>
    </div>
  )
}

export default TaskList
