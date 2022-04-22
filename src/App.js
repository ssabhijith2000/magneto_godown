import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StockIn from "./Pages/Stockin";
import StockOut from "./Pages/Stockout";
import DashBoard from "./Pages/Home";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<DashBoard />} />
          <Route exact path="/stockin" element={<StockIn />} />
          <Route exact path="/stockout" element={<StockOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
