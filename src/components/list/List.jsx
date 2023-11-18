import React from 'react';
import TaskItem from '../item/taskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  // Verificar si tasks está definido y es un array antes de usar map
  if (!tasks || !Array.isArray(tasks)) {
    return null; // O algún otro comportamiento por defecto
  }

  return (
    <>
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