import Todo from "./Todo";

export default function TodoList({
  todos,
  handleCheckboxChange,
  handleDeleteButtonClick,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </ul>
  );
}
