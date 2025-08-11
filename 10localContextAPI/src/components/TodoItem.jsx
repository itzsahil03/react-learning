import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-3 shadow-sm transition-colors duration-300 ${
        todo.completed ? 'bg-red-200' : 'bg-green-200'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-grow bg-transparent outline-none ${
          isTodoEditable ? 'border border-gray-300 px-2 py-1 rounded-md' : ''
        } ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="w-8 h-8 flex items-center justify-center rounded-md bg-yellow-100 hover:bg-yellow-200 text-sm disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-md bg-red-100 hover:bg-red-200 text-sm"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
