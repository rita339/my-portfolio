import "./Projects.css";
import { useEffect } from "react";

export const Projects = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Projects">
      <div className="heading">
        <h1>Latest Projects</h1>
        <p>
          Welcome to my latest projects, where I showcase the most recent work
          I've been involved in. This section represents an opportunity to dive
          into my skills and creativity. Explore below my recent endeavors.
        </p>
      </div>
      {/* Card-01 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src="./Frame.png" alt="Frame" />
          </div>

          <a
            href="https://trellomania-frontend.onrender.com/"
            className="project-text"
            target="_blank"
          >
            <h2>TrelloMania</h2>
            <p>
              As part of training to become a full stack web developer, we have
              build a Trello-like application in the MERN stack.
            </p>
          </a>
        </div>
      </div>
      {/* Card-02 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src="./Frame.png" alt="Frame" />
          </div>

          <a href="#" className="project-text" target="_blank">
            <h2>UBL Project</h2>
            <p>
              The UBL Project is an initiative by the Independent Citizens'
              List, focusing on promoting citizen participation in local
              communities.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
