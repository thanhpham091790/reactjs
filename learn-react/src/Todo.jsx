import { useState } from "react";

export default function Todo({ todo, handleCheckboxChange, handleDeleteButtonClick }) {
  const [edit, setEdit] = useState(false);
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
            onChange={() => handleEditTodoChange(todo.id)}
          />{" "}
          <button onClick={() => handleSaveClick(todo.id)}>Save</button>
        </>
      ) : (
        <>
          {todo.title}{" "}
          <button onClick={() => handleEditClick(todo.id)}>Edit</button>
        </>
      )}{" "}
      <button onClick={() => handleDeleteButtonClick(todo.id)}>Delete</button>
    </li>
  );
}
