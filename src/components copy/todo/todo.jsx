import './todo.css'
import React, {useEffect, useState} from 'react'
import Taskform from './taskform'
import Task from './task'

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);
  
  const addTasks =(name) => {
    setTasks( prev=>{
      return [...prev, {name:name,done:false}];
    })
  }


  return (
    <div className='todo-container'>
      <main>
      <Taskform onAdd={addTasks}/>
      <div className='task-container'>
      {tasks.map(task=> (
        <Task {...task}/>
      ))}
      </div>
      </main>
    </div>
  )
}

export default Todo
