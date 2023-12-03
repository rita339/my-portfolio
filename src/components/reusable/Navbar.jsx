import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { Sidebar } from "./Sidebar.jsx";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className="nav-container">
        <NavLink to="/" className="img-logo">
          <h1>Julia Erbis</h1>
        </NavLink>
        <label className="burger-icon">
          <input type="checkbox" id="checkbox" onClick={toggleButton} />
          <i className={`fa-solid fa-bars${isActive ? "hidden" : ""}`}></i>
        </label>
        <Sidebar isActive={isActive} toggleButton={toggleButton} />
      </nav>
    </header>
  );
};
