import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import "./Header.css";

function Header() {
  const context = useContext(CounterContext);
  return (
    <header>
      <h1>Post App Logo</h1>
      <div className="counter-display-box">
        <h2>Counter is {context.counter}</h2>
      </div>
    </header>
  );
}

export default Header;
