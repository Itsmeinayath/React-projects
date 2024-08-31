import { useEffect, useState } from 'react';
// import { TodoProvider } from './contex'
import { TodoProvider } from './contexts/ToDoContext';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem'; // Added import for TodoItem

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-gray-900 min-h-screen py-10">
        <div className="w-full max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6 text-white">
          <h1 className="text-3xl font-extrabold text-center mb-6">Manage Your Todos</h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="space-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
