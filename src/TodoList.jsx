import { TodoItem } from "./TodoItem";

// Component to render the list of todos
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Show a message if there are no todos */}
      {todos.length === 0 && <p className="empty-message">No Todos</p>}
      
      {/* Render each todo using the TodoItem component */}
      {todos.map((todo) => (
        <TodoItem
          {...todo} // Pass all todo properties (id, title, completed)
          key={todo.id} // Set a unique key for each item
          toggleTodo={toggleTodo} // Pass toggleTodo function as a prop
          deleteTodo={deleteTodo} // Pass deleteTodo function as a prop
        />
      ))}
    </ul>
  );
}
