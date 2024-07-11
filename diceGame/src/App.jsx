import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import GameScreen from "./components/GameScreen";
import GameScreen2 from "./components/GameScreen2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gameScreen" element={<GameScreen2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
