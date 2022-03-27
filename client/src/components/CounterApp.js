import React, { useState } from "react";
import "./CounterApp.css";
function CounterApp() {
  const [counter, setCounter] = useState(0);

  function handleAddCounter() {
    setCounter(counter + 1);
  }

  function handleSubtractCounter() {
    setCounter(counter - 1);
  }

  function handleResetCounter() {
    setCounter(0);
  }

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleAddCounter}>+</button>
        <button onClick={handleSubtractCounter}>-</button>
        <button onClick={handleResetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
