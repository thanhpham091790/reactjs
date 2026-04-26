import "./App.css";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import PackingList from "./PackingList";

function App() {
  return (
    <div className="app">
      <PackingList />
      <Gallery />
      <TodoList />
    </div>
  );
}

export default App;
