import "./Footer.css";
import Logo from "../../images/Logo.png";
import { NavLink } from "react-router-dom";
import { Slidingtext } from "./Slidingtext.jsx";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+49 (176) 287 229 56";
  const emailAdress = "iuliia.erbis@gmail.com";
  const telegramUsername = "@UserjuliaErb";

  return (
    <footer>
      <Slidingtext />
      <section className="footer-content">
        <article className="footer-top">
          <h1>Let's Work Together</h1>
          <NavLink to="/projects">
            <button>
              Get Started
              <div className="icon-btn">
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </button>
          </NavLink>
        </article>

        <div className="line"></div>

        <article className="container-card">
          <div className="social-card">
            <img src={Logo} alt="Logo Bild" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur dolorum. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>

            <div className="socialmedia">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-xing"></i>
              </a>
            </div>
          </div>

          <div className="card-footer">
            <div className="header">
              <p>NAVIGATION</p>
              <div className="footer-line"></div>
            </div>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
            <NavLink className="navlink" to="/projects">
              Projects
            </NavLink>
            <NavLink className="navlink" to="/resume">
              Résumé
            </NavLink>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </div>
        </article>

        <article className="container-card01">
          <div className="card-footer">
            <div className="header">
              <p>CONTACT</p>
              <div className="footer-line"></div>
            </div>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <a href={`tel:${telegramUsername}`}>{telegramUsername}</a>
            <a href={`mailto:${emailAdress}`}>{emailAdress}</a>
          </div>

          <div className="card-footer">
            <div className="header">
              <p>ADDRESS</p>
              <div className="footer-line"></div>
            </div>
            <div className="address-info">
              <p>41812 Erkelenz</p>
              <p>Hoogenhof 49A</p>
            </div>
          </div>
        </article>

        <div className="line"></div>

        <article className="copyright-container">
          <p>©{currentYear} All Rights Reserved. </p>

          <a
            href="https://www.ihk.de/bodensee-oberschwaben/recht/vertraege-schliessen/vertragsgestaltung-und-abwicklung/allgemeine-geschaeftsbedingungen-1942926#:~:text=Als%20AGB%20gelten%20alle%20f%C3%BCr,Gesch%C3%A4ftsbedingungen%E2%80%9D%20ist%20dabei%20nicht%20erforderlich."
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>
          <a
            href="https://www.bundesregierung.de/breg-de/service/datenschutzhinweis/datenschutzerklaerung-1532494"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </article>
      </section>
    </footer>
  );
};
