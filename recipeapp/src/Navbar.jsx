import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/Home">
          Recipe Manager
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Recipes">
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
