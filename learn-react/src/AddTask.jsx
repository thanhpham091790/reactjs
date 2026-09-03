import { useState, useContext, use } from "react";
import { useTasksDispatch } from "./TasksContext";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleAddButtonClick() {
    setText("");
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={handleTextChange}
      />{" "}
      <button onClick={handleAddButtonClick}>Add</button>
    </>
  );
}
