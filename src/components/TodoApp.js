import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from './Button';

// Main component for the to-do app
const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(''); // State for new task input

  const handleAddTask = (e) => {
      e.preventDefault();
      // Check if the newTask is empty or contains invalid characters
      if (!newTask.trim() || !/^[a-zA-Z\s]*$/.test(newTask)) {
          alert("Please enter a valid task (letters and spaces only).");
          return;
      }
      const newTaskObj = {
          id: Date.now(),
          text: newTask,
          completed: false
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
  };

  const handleCompleteTask = (id) => {
      const updatedTasks = tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update newTask state on input change
          placeholder="Enter a new task"
        />
        <Button text="Add Task" onClick={handleAddTask} />
      </form>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <TodoList
          tasks={tasks} // Pass tasks state as a prop
          onComplete={handleCompleteTask} // Pass complete handler
          onDelete={handleDeleteTask} // Pass delete handler
        />
      )}
    </div>
  );
};

export default TodoApp;
