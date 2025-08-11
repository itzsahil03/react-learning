import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex w-full">
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 outline-none bg-white text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-300"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-md px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
