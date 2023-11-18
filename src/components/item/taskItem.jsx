import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../item/taskItem.css'

const TaskItem = ({ task, onComplete, onDelete }) => {
  // Verificar si task está definido antes de acceder a sus propiedades
  if (!task) {
    return null; // O algún otro comportamiento por defecto
  }

  
  return (
    < div className={`task ${task.completed ? 'completed' : ''}`}>
      <span className='task-name'>{task.name}</span>
      {!task.completed ? 
      <button className='pending-button' onClick={() => onComplete(task.id)}>Pendiente</button> : <p className='completed-text'>Completo</p>}
      <button onClick={() => onDelete(task.id)} className='icon-delete'>
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
