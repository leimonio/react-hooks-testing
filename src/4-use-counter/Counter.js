import React from "react";
import "../styles.css";

function useCounter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(30);
  }, []);

  return [count, setCount];
}

function Counter() {
  const [count, setCount] = useCounter();

  return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
      {count}
    </button>
  );
}

export { Counter };
