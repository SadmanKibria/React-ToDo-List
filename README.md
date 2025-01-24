# Minimal To-do List

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges and Solutions](#Challenges-and-solutions)
- [Key Learning](#key-learning)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Introduction

Minimal Todo List is a lightweight and responsive React-based application designed to manage daily tasks efficiently. The app is a personal project aimed at enhancing my React and front-end development skills while showcasing my ability to create clean, reusable, and maintainable code.

This project is perfect for demonstrating my understanding of core React concepts, including state management, component composition, and integration with browser APIs like `localStorage`.

## Screenshots

1.  **Home Page without Tasks**
    (screenshot)
2.  **Home Page with Tasks**

## Features

- **Add Tasks:** Add new tasks to your to-do list effortlessly.
- **Mark Tasks as Completed:** Use checkboxes to toggle the completion status of tasks.
- **Delete Tasks:** Remove tasks you no longer need.
- **Persistent Storage:** Tasks are saved in `localStorage` to maintain state across page reloads.
- **Responsive Design:** Mobile-friendly UI with a clean and minimalistic look.

## Dependencies

This project uses the following technologies and libraries:

- **React:** A JavaScript library for building user interfaces.
- **CSS:** Custom styles for a minimal and professional UI.
- **Browser APIs:** Used `localStorage` for data persistence.

## Getting Started

1. Clone this repository to your local machine:
   `git clone https://github.com/SadmanKibria/React-ToDo-List.git`

2. Navigate to the project directory:
   `cd react-todo-list`

3. Install dependencies:
   `npm install`

4. Start the development server:
   `npm start`

## Usage

To use the currency converter, follow these steps:

1. Add a new task using the input field and "Add" button.
2. Toggle the completion status of tasks by clicking the checkboxes.
3. Delete tasks using the "Delete" button.
4. The app automatically saves your tasks in `localStorage`, ensuring your list is preserved across browser sessions.

## Project Structure

The project directory contains the following files:

- **`App.jsx`:** Main application logic, including state management for the task list and rendering child components.
- **`NewTodoForm.jsx`:** Component for adding new tasks. It handles form submission and integrates with the parent component via props.
- **`TodoList.jsx`:** Component for rendering the task list. It maps over the tasks and uses the `TodoItem` component.
- **`TodoItem.jsx`:** Represents an individual task, providing toggle and delete functionality.
- **`styles.css`:** Contains all custom styles for a clean and responsive UI.

## Challenges and Solutions

1.  **State Persistence:**
    - **Challenge:** Ensuring the task list persists across page reloads.
    - **Solution:** Used `localStorage` with `useEffect` to save and retrieve the task list.
2.  **Empty Task Prevention:**
    - **Challenge:** Preventing users from adding empty tasks.
    - **Solution:** Added input validation in the `NewTodoForm` component to ignore empty submissions.
3.  **UI Responsiveness:**
    - **Challenge:** Designing a UI that adapts well to different screen sizes.
    - **Solution:** Created a minimal layout using CSS, ensuring usability across devices.

## Key Learning

- **React State Management:** Learned to manage and update state using `useState` and `useEffect`.
- **Component Composition:** Designed reusable components like `TodoItem` and `TodoList`.
- **LocalStorage Integration:** Leveraged browser APIs to persist data across sessions.
- **Code Readability:** Focused on writing clean, well-structured and commented code for maintainability.

## Future Enhancements

- **Due Dates:** Add a feature to set deadlines for tasks.
- **Task Categories:** Allow users to categorise tasks (e.g., Work, Personal, Urgent).
- **Search and Filter:** Enable filtering and searching tasks by keywords or completion status.
- **Themes:** Add a light/dark mode toggle for user preference.

## Licence

This project is open-source and available under the [MIT License](LICENSE).

Feel free to explore, use, and contribute to the Minimal To-do List app. Feel free to reach out for any queries or collaboration opportunities.
You can always email me at sadmankibria1@gmail.com
