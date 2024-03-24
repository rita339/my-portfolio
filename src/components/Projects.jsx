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

          <div className="project-text">
            <h2>Web Development</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quae ipsa soluta itaque. In, debitis!
            </p>
          </div>
        </div>
      </div>
      {/* Card-02 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src="./Frame.png" alt="Frame" />
          </div>

          <div className="project-text">
            <h2>Web Development</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quae ipsa soluta itaque. In, debitis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
