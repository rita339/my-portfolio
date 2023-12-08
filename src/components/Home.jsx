import fakeimage from "../images/fake-bild.png";
import "./Home.css";
import Blob from "../images/blob.png";

export const Home = () => {
  return (
    <section className="home-container">
      <div className="container-1">
        <div className="container-2">
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
            <img src={Blob} alt="Blob" width="180%" height="180%" />
          </div>
          <img src={fakeimage} alt="profil Bild" className="home-img" />
        </div>
      </div>

      <div className="description">
        <h2>I'am a Web Developer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          laudantium nam maiores doloremque, adipisci quas aliquid autem aperiam
          laboriosam ab similique. Aut nam exercitationem alias itaque officiis
          consequatur cumque inventore?
        </p>
        <button>
          <p> Let's Talk</p>
          <div className="icon-btn">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </button>
      </div>
    </section>
  );
};
