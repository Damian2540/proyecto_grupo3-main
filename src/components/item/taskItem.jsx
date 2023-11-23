import React from "react";
import { FaTrash } from "react-icons/fa";
import "../item/taskItem.css";

const TaskItem = ({ task, onComplete, onDelete }) => {
  
  if (!task) {
    return null; 
  }

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span className="task-name">{task.name}</span>


      {!task.completed ? (
        <button className="pending-button" onClick={() => onComplete(task.id)}>
          Pendiente
        </button>
      ) : (
        <p className="completed-text">Completado</p>
      )}


      <button onClick={() => onDelete(task.id)} className="icon-delete">
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
