import React, { useState, useEffect } from 'react';
import TaskList from '../src/components/list/List';
import TaskForm from '../src/components/form/taskForm';
import './TodoApp.css'


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <header>
      <h1>Lista de Tareas</h1>
      </header>
      <main>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
      </main>
    </>
  );
};

export default TodoApp;