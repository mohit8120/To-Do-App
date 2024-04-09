import React from 'react';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
      {task.description && <p>Description: {task.description}</p>}
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
