import { NavLink } from "react-router-dom";
import "./Footer.css";
import { Slidingtext } from "./Slidingtext.jsx";
import { useEffect } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+4917628722956";
  const emailAdress = "iuliia.erbis@gmail.com";
  const telegramUsername = "@UserjuliaErb";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="Footer">
      <Slidingtext />
      <div className="footer-content">
        <div className="footer-header">
          <h1>Let's Work Together</h1>
          <NavLink to="/projects" className="footer-btn">
            Get Started
            <button className="icon-btn">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </NavLink>
        </div>

        <div className="line"></div>

        <div className="contact-content-container">
          <div className="contact-wrapper">
            <div className="social-container">
              <div className="social-header">
                <img src="./Logo.png" alt="Logo Bild" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur dolorum. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.
                </p>
              </div>

              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-xing"></i>
                </a>
              </div>
            </div>

            <div className="contact-nav-container">
              <div className="contact-header">
                <p>NAVIGATION</p>
                <div className="footer-line"></div>
              </div>
              <div className="contact-navigation">
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
                <NavLink className="navlink" to="/resume">
                  Résumé
                </NavLink>
                <NavLink className="navlink" to="/skills">
                  Skills
                </NavLink>
                <NavLink className="navlink" to="/projects">
                  Projects
                </NavLink>
                <NavLink className="navlink" to="/contact">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>

          {/*Contact & Address Bereich  */}

          <div className="contact-wrapper">
            <div className="contact-container">
              <div className="contact-header">
                <p>CONTACT</p>
                <div className="footer-line"></div>
              </div>
              <div className="contact-content">
                <div className="contact-item">
                  <p>Tel.:</p>
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </div>
                <div className="contact-item">
                  <p>Teleg:</p>
                  <a href={`tel:${telegramUsername}`}>{telegramUsername}</a>
                </div>
                <div className="contact-item">
                  <p>Email:</p>
                  <a href={`mailto:${emailAdress}`}>{emailAdress}</a>
                </div>
              </div>
            </div>

            <div className="contact-container">
              <div className="contact-header">
                <p>ADDRESS</p>
                <div className="footer-line"></div>
              </div>

              <div className="address-item">
                <p>Hoogenhof 49A</p>
                <p>41812 Erkelenz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>

        <div className="copyright-container">
          <div className="container-left">
            <p>©{currentYear} All Rights Reserved. </p>
          </div>
          <div className="container-right">
            <div className="container-right-content">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
