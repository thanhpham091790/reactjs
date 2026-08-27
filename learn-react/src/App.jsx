import { useState } from "react";
import AddToDo from "./AddTodo";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

let nextId = 3;

export default function TaskApp() {
  /**
   * All States
   */
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");

  /**
   * All Handlers
   */

  // Handler When change value of input before add it.
  function handleAddInputChange(event) {
    setTitle(event.target.value);
  }

  // Handler when click on Add button
  function handleAddButtonClick() {
    if (title !== "") {
      setTodos([...todos, { id: nextId++, title: title, done: false }]);
    }
  }

  // Handler when click on checkbox
  function handleCheckboxChange(todoId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: event.target.checked };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  // Handler when edit input change
  function handleEditInputChange(todoId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: event.target.value };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  // Handler when click on Delete button
  function handleDeleteButtonClick(todoId) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  }

  // Rendering
  return (
    <>
      <AddToDo
        title={title}
        handleAddInputChange={handleAddInputChange}
        handleAddButtonClick={handleAddButtonClick}
      />
      <TodoList
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleEditInputChange={handleEditInputChange}
      />
    </>
  );
}
