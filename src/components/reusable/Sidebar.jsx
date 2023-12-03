import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = ({ isActive, toggleButton }) => {
  return (
    <>
      {isActive && (
        <ul className="nav-menu">
          {/* spy => to true (which makes Link selected when scroll is at its targets position)
          smooth => to true (which sets the animation)

          */}
          <label className="close-btn">
            <input
              type="checkbox"
              id="checkclose-btn"
              onClick={toggleButton}
              // onKeyDown={(event) => {
              //   if (event.key === "Enter") {
              //     event.preventDefault();
              //     toggleButton();
              //   }
              // }}
            />
            <i className="fa-solid fa-xmark"></i>
          </label>
          <Fade
            left
            className="navlink-container"
            style={{ marginTop: "6rem" }}
          >
            <NavLink
              className="nav-link"
              to="/"
              smooth="true"
              duration={2000}
              spy="true"
            >
              {/* <div className="nav-item"> */}
              <i className="fa-solid fa-house-chimney"></i>
              <p>Home</p>
              {/* </div> */}
            </NavLink>
          </Fade>
          <Fade left className="navlink-container">
            <NavLink
              className="nav-link"
              to="/about"
              smooth="true"
              duration={2000}
              spy="true"
            >
              <i className="fa-solid fa-user"></i>
              <p>About</p>
            </NavLink>
          </Fade>
          <Fade left className="navlink-container">
            <NavLink
              className="nav-link"
              to="/projects"
              smooth="true"
              duration={2000}
              spy="true"
            >
              <i className="fa-solid fa-folder"></i>
              <p>Projects</p>
            </NavLink>
          </Fade>
          <Fade left className="navlink-container">
            <NavLink
              className="nav-link"
              to="/resume"
              smooth="true"
              duration={2000}
              spy="true"
            >
              <i className="fa-solid fa-file"></i>
              <p>Resume</p>
            </NavLink>
          </Fade>
          <Fade left className="navlink-container">
            <NavLink
              className="nav-link"
              to="/contact"
              smooth="true"
              duration={2000}
              spy="true"
            >
              <i className="fa-solid fa-envelope"></i>
              <p>Contact</p>
            </NavLink>
          </Fade>
        </ul>
      )}
    </>
  );
};
