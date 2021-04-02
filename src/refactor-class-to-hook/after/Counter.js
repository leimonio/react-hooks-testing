import React from "react";

import "../../styles.css";

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(30);
  }, []);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return (
    <button className="button" onClick={increaseCount}>
      {count}
    </button>
  );
}

export { Counter };
