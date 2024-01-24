import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { Sidebar } from "./Sidebar.jsx";
import Logoimage from "../../images/Logo.png";
import colorfillImage from "../../images/color.png";
import Menu from "../../images/menu.png";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className="nav-container">
        <NavLink to="/" className="img-logo">
          <img src={Logoimage} alt="logo-image" />
        </NavLink>
        <div className="right-menu-container">
          <button className="color-fill-btn">
            <img src={colorfillImage} alt="color-fill" />
          </button>
          <label className="burger-icon">
            <input type="checkbox" id="checkbox" onClick={toggleButton} />
            <img src={Menu} alt="burger-menu-icon" />
          </label>
        </div>
        <Sidebar isActive={isActive} toggleButton={toggleButton} />
      </nav>
    </header>
  );
};
