import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <h2>Counter is x</h2>
      <button onClick={() => navigate("/counter/view")}>
        View Counter Page
      </button>
    </footer>
  );
}

export default Footer;
