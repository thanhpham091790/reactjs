import { useReducer } from "react";

const initialState = { count: 0 };

export default function Counter() {
  /**
   * All states
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Count:{state.count}</h1>
        <button onClick={() => dispatch({ type: "add" })}>+</button>{" "}
        <button onClick={() => dispatch({ type: "minus" })}>-</button>{" "}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
