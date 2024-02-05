import profilBild from "../images/profilBild.png";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="Home">
      <div className="user-info">
        <div className="info">
          <div className="title">
            <h1>
              <span>Julia</span>
              <span>Erbis</span>
            </h1>
            <div className="border"></div>
            <p>Social account</p>
          </div>

          <div className="socialmedia-container">
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
      </div>
      <div className="img-container">
        <div className="blob"></div>
        <img
          src={profilBild}
          alt="profil Bild"
          className="home-img"
          height="300px"
        />
      </div>
      <div className="description">
        <h2>I am a Web Developer</h2>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          laudantium nam maiores doloremque, adipisci quas aliquid autem aperiam
          laboriosam ab similique. Aut nam exercitationem alias itaque officiis
          consequatur cumque inventore?
        </p>
        <Link to="/contact" className="contact-link">
          Let's Talk
          <div className="icon-btn">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </Link>
      </div>
    </section>
  );
};
