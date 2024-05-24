import React from 'react'
import Checkbox from './checkbox'

const Task = ({name, done}) => {
  return (
    <div className='task'>
        <Checkbox defaultChecked={done}/>
      {name}
    </div>
  )
}

export default Task
