export default function TodoList() {
  const person = {
    name: "Hedy Lamarr",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div className="todo-list" style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt={person.name}
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}
