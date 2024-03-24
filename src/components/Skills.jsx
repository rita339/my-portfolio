import "./Skills.css";

export const Skills = () => {
  return (
    <section className="Skills">
      <article className="heading-skills">
        <h1>My Skills</h1>
        <p>
          Welcome to my skills section, where I showcase the diverse range of
          abilities I have acquired throughout my digital journey. Explore below
          to learn more about my expertise and how it can benefit your
          endeavors.
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
