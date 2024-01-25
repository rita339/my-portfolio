import profilBild from "../images/profilBild.png";
import "./Home.css";
import Blob from "../images/blob.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-container">
      <div className="user-info">
        <div className="info">
          <div className="title">
            <h1>Julia Erbis</h1>
            <div className="border"></div>
            <p>Social account</p>
          </div>

          <div className="socialmedia-icons">
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
        <div className="img-container">
          <div className="blob">
            <img src={Blob} alt="Blob" />
          </div>
          <img src={profilBild} alt="profil Bild" className="home-img" />
        </div>
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
          <button>
            <p> Let's Talk</p>
            <div className="icon-btn">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};
