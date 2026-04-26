import "./App.css";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import PackingList from "./PackingList";
import List from "./List";

function App() {
  return (
    <div className="app">
      <List />
      <PackingList />
      <Gallery />
      <TodoList />
    </div>
  );
}

export default App;
