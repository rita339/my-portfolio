import "./Skills.css";

export const Skills = () => {
  return (
    <section className="Skills">
      <article className="heading-skills">
        <h1>My Skills</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </article>

      <article className="list-content-container">
        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>HTML</h2>
            </div>
          </div>
        </div>

        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>CSS</h2>
            </div>
          </div>
        </div>
      </article>

      <article className="list-content">
        <div className="list-card">
          <div className="badge-skills">
            <h2>JavaScript</h2>
          </div>
        </div>
      </article>

      <article className="list-content-container">
        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>React</h2>
            </div>
          </div>
        </div>

        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </article>
      <article className="list-content">
        <div className="list-card">
          <div className="badge-skills">
            <h2>MongoDB</h2>
          </div>
        </div>
      </article>

      <article className="list-content-container">
        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>Git</h2>
            </div>
          </div>
        </div>

        <div className="list-content">
          <div className="list-card">
            <div className="badge-skills">
              <h2>Express</h2>
            </div>
          </div>
        </div>
      </article>

      <article className="list-content">
        <div className="list-card">
          <div className="badge-skills">
            <h2>Tailwind</h2>
          </div>
        </div>
      </article>
    </section>
  );
};
