import React, { useState } from 'react';
import { useTodo } from '../contexts/ToDoContext';

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
        className={`flex items-center border border-transparent rounded-lg px-4 py-2 gap-x-3 shadow-md transition duration-300 ${
            todo.completed ? 'bg-gradient-to-r from-green-200 to-green-300' : 'bg-gradient-to-r from-purple-200 to-pink-200'
        }`}
    >
        <input
            type="checkbox"
            className="cursor-pointer accent-green-600 transform scale-125"
            checked={todo.completed}
            onChange={toggleCompleted}
        />
        <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-md text-black ${
                isTodoEditable ? 'border-gray-300 px-2' : 'border-transparent'
            } ${todo.completed ? 'line-through text-gray-500' : ''} transition duration-150`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
            className={`inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-blue-500 text-white hover:bg-blue-600 transition duration-150 ${
                todo.completed ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
                if (todo.completed) return;
    
                if (isTodoEditable) {
                    editTodo();
                } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
        >
            {isTodoEditable ? '📁' : '✏️'}
        </button>
        {/* Delete Todo Button */}
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-red-200 text-white hover:bg-red-500 transition duration-150"
            onClick={() => deleteTodo(todo.id)}
        >
            ❌
        </button>
    </div>
    
    );
}

export default TodoItem;
