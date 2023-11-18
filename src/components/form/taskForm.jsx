import React, { useState } from 'react';
import '../form/taskForm.css'
const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') {
      alert('Por favor, ingresa una tarea válida.');
      return;
    }

    onAddTask({ id: Date.now(), name: newTask, completed: false });
    setNewTask('');
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <section className='input-container'>
        <input
          type="text"
          placeholder="¿Qué desea hacer hoy?"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
        </section>
      </form>

    
    );
};

export default TaskForm;

