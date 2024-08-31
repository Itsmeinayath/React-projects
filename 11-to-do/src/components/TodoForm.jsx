import React, { useState } from 'react';
import { useTodo } from '../contexts/ToDoContext';

function TodoForm() {
    const [todo, setTodo] = useState(''); // Corrected typo here
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;
        addTodo({
            todo,
            completed: false // Fixed another typo: 'complted' to 'completed'
        });
        setTodo('');
    };

    return (
        <form onSubmit={add} className="flex items-center justify-center shadow-md bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 p-1 rounded-lg">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-transparent focus:border-purple-900 rounded-l-lg px-4 outline-none transition duration-150 bg-white/50 text-gray-700 py-2 shadow-inner"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button 
            type="submit" 
            className="rounded-r-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-white transition duration-150 ease-in-out shadow-md">
            Add
        </button>
    </form>
    
    );
}

export default TodoForm;
