import { Link, NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <section className="Home">
      <div className="user-info">
        <div className="info">
          <h1>Julia Erbis</h1>
          <div className="border"></div>
          <p>Social account</p>
        </div>
        <div className="socialmedia-container">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/rita339">
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          laudantium nam maiores doloremque, adipisci quas aliquid autem aperiam
          laboriosam ab similique. Aut nam exercitationem alias itaque officiis
          consequatur cumque inventore?
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
