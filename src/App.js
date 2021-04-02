import React from "react";
import "./styles.css";

// You can try each example by uncommenting the needed example
// and commenting the rest of the examples

// import { Counter } from "./1-use-state/Counter";
// import { Counter } from "./2-use-effect/Counter";
// import { Counter } from "./3-use-reducer/Counter";
// import { Counter } from "./4-use-counter/Counter";
// import { CounterContainer as Counter } from "./5-use-context/Counter";
// import { CounterContainer as Counter } from "./6-use-context-async/Counter";
// import { Counter } from "./refactor-class-to-hook/before/Counter";
import { Counter } from "./refactor-class-to-hook/after/Counter";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
