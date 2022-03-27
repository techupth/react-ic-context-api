import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ViewCounterPage from "./pages/ViewCounterPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter/view" element={<ViewCounterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
