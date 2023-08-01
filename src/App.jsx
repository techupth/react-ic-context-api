import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { CounterContext } from "./context/CounterContext";
import ViewCounterPage from "./pages/ViewCounterPage";
import HomePage from "./pages/HomePage";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          counter,
          setCounter,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter/view" element={<ViewCounterPage />} />
          </Routes>
        </Router>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
