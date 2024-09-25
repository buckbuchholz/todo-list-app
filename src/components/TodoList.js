import React from 'react';
import TodoItem from './TodoItem';

// Component to display the list of todo items
const TodoList = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
