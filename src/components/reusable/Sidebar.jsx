import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = ({ isActive, toggleButton }) => {
  const navLinkHandler = () => {
    toggleButton();
  };
  return (
    <>
      {isActive && (
        <ul className="nav-menu">
          <label className="close-btn">
            <input type="checkbox" id="checkclose-btn" onClick={toggleButton} />
            <i className="fa-solid fa-xmark"></i>
          </label>
          <div className="navlink-container" style={{ marginTop: "8rem" }}>
            <NavLink className="nav-link" to="/" onClick={navLinkHandler}>
              <i className="fa-solid fa-house-chimney"></i>
              <p>Home</p>
            </NavLink>
          </div>

          <div className="navlink-container">
            <NavLink className="nav-link" to="/resume" onClick={navLinkHandler}>
              <i className="fa-solid fa-file"></i>
              <p>Résumé</p>
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink className="nav-link" to="/skills" onClick={navLinkHandler}>
              <i className="fa-solid fa-gear"></i>
              <p>Skills</p>
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink
              className="nav-link"
              to="/projects"
              onClick={navLinkHandler}
            >
              <i className="fa-solid fa-folder"></i>
              <p>Projects</p>
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={navLinkHandler}
            >
              <i className="fa-solid fa-envelope"></i>
              <p>Contact</p>
            </NavLink>
          </div>
        </ul>
      )}
    </>
  );
};
