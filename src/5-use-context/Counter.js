import React from "react";
import "../styles.css";

const CounterContext = React.createContext();

function CounterContainer() {
  const [count, setCount] = React.useState(30);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <ul>
        <li>
          <Counter />
        </li>
        <li>
          <Counter />
        </li>
      </ul>
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = React.useContext(CounterContext);

  return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
      {count}
    </button>
  );
}

export { CounterContainer };
