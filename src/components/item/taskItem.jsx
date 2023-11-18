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
      <span>{task.name}</span>
      <button onClick={() => onComplete(task.id)}>Pendiente</button>
      <button onClick={() => onDelete(task.id)} className='icon-delete'>
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
