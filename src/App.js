import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Sidebar/Navbar";
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
         
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
