import { useEffect } from "react";
import "./Resume.css";

export const Resume = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Resume">
      <article className="heading-resume">
        <h1>My Résumé</h1>
        <p>
          Welcome to my professional journey captured in this résumé. Here,
          you'll find a comprehensive overview of my skills and experiences. I
          invite you to explore my career highlights and qualifications as you
          consider the value I can bring to your team or project.
        </p>
      </article>

      <article className="content-resume">
        <div className="card-resume">
          <div className="item-resume">
            <div className="item-heading">
              <h2>DCI Digital Career Institute</h2>
              <div className="badge-resume">
                <p>March 2023 - May 2024</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>Certificate of web developing</h3>
              <p>
                During my time at DCI Digital Career Institute, I immersed
                myself in web development, acquiring essential skills and
                knowledge in this field. Equipped with these skills, I am able
                to contribute effectively to web projects.
              </p>
            </div>
          </div>

          <div className="divider-resume"></div>
          {/* Item ---- 02 */}
          <div className="item-resume">
            <div className="item-heading">
              <h2>Cologne University</h2>
              <div className="badge-resume">
                <p>October 2012 - March 2018</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>B.Sc. Health Economics</h3>
              <p>
                At Cologne University, I completed my Bachelor's degree in
                Health Economics. This study not only provided me with a sound
                understanding of the economic aspects of healthcare, but also
                strengthened my analytical and problem-solving skills.
              </p>
            </div>
          </div>
          <div className="divider-resume"></div>

          {/* Item ----- 03 */}
          <div className="item-resume">
            <div className="item-heading">
              <h2>Lviv National Polytechnic University </h2>
              <div className="badge-resume">
                <p>September 2004 - December 2009</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>Dipl. Applied Linguistics</h3>
              <p>
                Driven by my passion for languages, I began my studies in
                Applied Linguistics at Lviv National Polytechnic University in
                2004. This was the beginning of my journey into the world of IT.
              </p>
            </div>
          </div>
          <div className="divider-resume"></div>

          <a
            href="Resume.pdf"
            download
            rel="noreferrer"
            className="btn-container"
          >
            Résumé
            <div className="btn-resume">
              <i className="fa-solid fa-download"></i>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
};
