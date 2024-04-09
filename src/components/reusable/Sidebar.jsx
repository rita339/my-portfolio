import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useEffect } from "react";

export const Sidebar = ({ isActive, setIsActive }) => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sidebar-wrapper">
      <i
        className="fa-solid fa-xmark close-btn"
        onClick={() => setIsActive(!isActive)}
      ></i>
      <div className="nav-wrapper">
        <NavLink
          className="nav-link"
          to="/"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="nav-link-container">
            <div className="icon-text-container">
              <i className="fa-solid fa-house-chimney"></i>
              <p>Home</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/resume"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="nav-link-container">
            <div className="icon-text-container">
              <i className="fa-solid fa-file"></i>
              <p>Résumé</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/skills"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="nav-link-container">
            <div className="icon-text-container">
              <i className="fa-solid fa-gear"></i>
              <p>Skills</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/projects"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="nav-link-container">
            <div className="icon-text-container">
              <i className="fa-solid fa-folder"></i>
              <p>Projects</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/contact"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="nav-link-container">
            <div className="icon-text-container">
              <i className="fa-solid fa-envelope"></i>
              <p>Contact</p>
            </div>
          </div>
        </NavLink>
      </div>
      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/julia-e-07bab42a4/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/rita339" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.xing.com/?gad_source=1" target="_blank">
          <i className="fa-brands fa-xing"></i>
        </a>
      </div>
    </div>
  );
};
