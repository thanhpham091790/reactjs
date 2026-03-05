import { useState, useMemo } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const result = useMemo(() => expensiveCalculation(count), [count])

  const clickHandler = () => {
    setCount(count + 1);
  }

  const addTodoHandler = () => {
    setTodos((prevTodos) => [...prevTodos, 'New Todo']);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button type='button' onClick={addTodoHandler}>Add Todo</button>
      </div>
      <hr />
      <div>
        <p>Count: {count}</p>
        <button type='button' onClick={clickHandler}>+</button>
        <h2>Expensive Calculation</h2>
        <p>{result}</p>
        <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
      </div>
    </div>
  );
}

const expensiveCalculation = (number) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    number += 1;
  }
  return number;
}

export default App;