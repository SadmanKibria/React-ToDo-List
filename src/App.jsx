import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  // State for storing the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  // Toggles the completion status of a todo
  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  // Deletes a todo by its ID
  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <div className="container">
      <header className="app-title">Minimal Todo List</header>
      {/* Pass the addTodo function as a prop */}
      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">Your Tasks</h1>

      <ul className="list">
        {todos.length === 0 && <p className="empty-message">No Todos</p>}
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              <span>{todo.title}</span>
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
