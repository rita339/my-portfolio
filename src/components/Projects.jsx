import "./Projects.css";
import Frame from "../images/Frame.png";

export const Projects = () => {
  return (
    <section className="Projects">
      <div className="heading">
        <h1>Latest Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quidem
          autem! Eos fugiat alias labore.
        </p>
      </div>
      {/* Card-01 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src={Frame} alt="Frame" />
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
            <img src={Frame} alt="Frame" />
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
      {/* Card-03 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src={Frame} alt="Frame" />
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
      {/* Card-04 */}
      <div className="project-card">
        <div className="project-content">
          <div className="project-frame">
            <img src={Frame} alt="Frame" />
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
