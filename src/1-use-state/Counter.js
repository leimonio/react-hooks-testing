import React from "react";
import "../styles.css";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
      {count}
    </button>
  );
}

export { Counter };
