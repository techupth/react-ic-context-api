import "./ViewCounterPage.css";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function ViewCounterPage() {
  const context = useContext(CounterContext);
  return (
    <div className="view-counter-container">
      <h1>Now counter is</h1>
      <h1>{context.counter}</h1>
    </div>
  );
}

export default ViewCounterPage;
