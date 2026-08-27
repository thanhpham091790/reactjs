import Todo from "./Todo";

export default function TodoList({
  todos,
  handleCheckboxChange,
  handleDeleteButtonClick,
  handleEditInputChange,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleEditInputChange={handleEditInputChange}
        />
      ))}
    </ul>
  );
}
