import { useEffect, useState } from "react";
import "./Navbar.css";
import { Sidebar } from "./Sidebar.jsx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(() => {}, [isActive]);

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <NavLink to="/">
          <img src="/Logo.png" alt="mein-logo" />
        </NavLink>
        <img
          src="/menu.png"
          alt="burger-menu"
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      {isActive && (
        <ul>
          <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </ul>
      )}
    </nav>
  );
};
