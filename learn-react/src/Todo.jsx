import { useState } from "react";

export default function Todo({
  todo,
  handleCheckboxChange,
  handleDeleteButtonClick,
  handleEditInputChange,
}) {
  /**
   * All states
   */
  const [edit, setEdit] = useState(false);

  /**
   * All handlers
   */

  // Handler when click on Edit button
  function handleEditButtonClick() {
    setEdit(true);
  }

  // Handler when click on Save button
  function handleSaveButtonClick() {
    setEdit(false);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => handleCheckboxChange(todo.id)}
      />{" "}
      {edit === true ? (
        <>
          <input
            type="text"
            value={todo.title}
            onChange={() => handleEditInputChange(todo.id)}
          />{" "}
          <button onClick={handleSaveButtonClick}>Save</button>
        </>
      ) : (
        <>
          {todo.title} <button onClick={handleEditButtonClick}>Edit</button>
        </>
      )}{" "}
      <button onClick={() => handleDeleteButtonClick(todo.id)}>Delete</button>
    </li>
  );
}
