import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const context = useContext(CounterContext);
  return (
    <footer>
      <h2>Counter is {context.counter}</h2>
      <button onClick={() => navigate("/counter/view")}>
        View Counter Page
      </button>
    </footer>
  );
}

export default Footer;
