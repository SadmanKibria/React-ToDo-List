import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

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
      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">Your Tasks</h1>
      <TodoList 
      todos={todos} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo} />
    </div>
  );
}
