import React from 'react';
import TaskItem from '../item/taskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  
  if (!tasks || !Array.isArray(tasks)) {
    return null; 
  }

  return (
    <>
       <h2>Lista</h2>
        <ul className="info">
          <li>Tarea</li>
          <li>Estado</li>
          <li>Acción</li>
        </ul>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TaskList;
