// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark px-4">
      <div className="d-flex align-items-center">
        <Link className="text-white me-4 text-decoration-none" to="/">Home</Link>
        <Link className="text-white text-decoration-none" to="/about">About</Link>
      </div>
    </nav>
  );
};
export default Navbar;
