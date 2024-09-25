import React from 'react';
import Button from './Button';

// Component to display individual todo item
const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.text}
      <div>
        <Button
          text={task.completed ? 'Undo' : 'Complete'}
          onClick={() => onComplete(task.id)}
        />
        <Button text="Delete" onClick={() => onDelete(task.id)} className="delete" />
      </div>
    </li>
  );
};

export default TodoItem;

