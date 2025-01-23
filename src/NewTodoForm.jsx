import React, { useState } from "react";

export function NewTodoForm({ addTodo }) {
  // State for managing new todo input
  const [newItem, setNewItem] = useState("");

  // Handles form submission to add a new todo
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent adding empty todos

    addTodo(newItem); // Call the addTodo function passed as a prop
    setNewItem("");
  }

  return (
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
  );
}
