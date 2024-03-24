import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Sidebar } from "./Sidebar.jsx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(() => {}, [isActive]);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navbar" ref={navbarRef}>
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
