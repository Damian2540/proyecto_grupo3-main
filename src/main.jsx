import React from 'react'
import TaskItem from './components/item/taskItem'
import TaskList from './components/list/List'
import ReactDOM from 'react-dom/client'
import TodoApp from './TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
    <TaskItem /> 
    <TaskList />
  </React.StrictMode>,
)
