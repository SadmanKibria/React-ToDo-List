// Component to render an individual todo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li className="list-item">
        <label className="todo-label">
          {/* Checkbox to toggle completion status */}
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span>{title}</span>
        </label>
        {/* Button to delete the todo */}
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    );
  }
  