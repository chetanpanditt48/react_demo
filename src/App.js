// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import UserList from "./components/usserList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
