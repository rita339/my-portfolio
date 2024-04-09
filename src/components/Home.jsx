import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

export const Home = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Home">
      <div className="user-info">
        <div className="info">
          <h1>Julia Erbis</h1>
          <div className="border"></div>
          <p>Social accounts</p>
        </div>
        <div className="socialmedia-container">
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

      <div className="img-container">
        <img
          src="./profilBild.png"
          alt="profil Bild"
          className="home-img"
          height="300px"
        />
      </div>

      <div className="description">
        <h2>I am a Web Developer</h2>
        <p>
          After a break, I feel ready to reactivate the technical skills I
          acquired during my studies, especially in the field of Applied
          Linguistics, again. At the DCI I am full of motivation to tackle the
          final spurt of my training programme. It fills me with joy soon to be
          able to demonstrate my skills as a web developer and to keep on
          learning.
        </p>
        <Link to="/contact" className="contact-link">
          Let's Talk
          <button className="icon-btn">
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};
