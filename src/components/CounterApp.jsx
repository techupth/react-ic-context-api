import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import "./CounterApp.css";
function CounterApp() {
  const context = useContext(CounterContext);

  function handleAddCounter() {
    context.setCounter(context.counter + 1);
  }

  function handleSubtractCounter() {
    context.setCounter(context.counter - 1);
  }

  function handleResetCounter() {
    context.setCounter(0);
  }

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{context.counter}</h2>
      <div>
        <button onClick={handleAddCounter}>+</button>
        <button onClick={handleSubtractCounter}>-</button>
        <button onClick={handleResetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
