import React from "react";
import "../styles.css";

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 30 });

  return (
    <button className="button" onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export { Counter };
