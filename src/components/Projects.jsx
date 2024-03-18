import "./Projects.css";
import { useEffect } from "react";

export const Projects = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Projects">
      <article className="heading">
        <h1>Latest Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quidem
          autem! Eos fugiat alias labore.
        </p>
      </article>
      {/* Card-01 */}
      <article className="project-card">
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
      </article>
      {/* Card-02 */}
      <article className="project-card">
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
      </article>
      {/* Card-03 */}
      <article className="project-card">
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
      </article>
      {/* Card-04 */}
      <article className="project-card">
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
      </article>
    </section>
  );
};
