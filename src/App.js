// src/App.js
import React, { useState } from "react";
import UserList from "./components/UserList.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mt-4">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<UserList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;