export default function AddToDo({
  title,
  handleAddInputChange,
  handleAddButtonClick,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={handleAddInputChange}
      />{" "}
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}
