import { useState } from "react";
import "./styles.css";

export default function App() {
  // State for managing new todo input
  const [newItem, setNewItem] = useState("");
  // State for storing the list of todos
  const [todos, setTodos] = useState([]);

  // Handles form submission to add a new todo
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent adding empty todos

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: newItem.trim(),
        completed: false,
      },
    ]);
    setNewItem("");
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
      {/* Form for adding new to-dos */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="Add a new task"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      {/* Header for the to-do list */}
      <h1 className="header">Your Tasks</h1>

      {/* List of to-dos */}
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
              className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
