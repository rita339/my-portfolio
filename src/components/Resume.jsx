import "./Resume.css";
import CV from "./assets/Resume.pdf";

export const Resume = () => {
  return (
    <section className="Resume">
      <div className="heading-resume">
        <h1>My Résumé</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      <div className="content-resume">
        <div className="card-resume">
          <div className="item-resume">
            <div className="item-heading">
              <h2>DCI Digital Career Institute</h2>
              <div className="badge-resume">
                <p>März 2023 - Mai 2024</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>Certificate of web developing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc.
              </p>
            </div>
          </div>

          <div className="divider-resume"></div>
          {/* Item ---- 02 */}
          <div className="item-resume">
            <div className="item-heading">
              <h2>DCI Digital Career Institute</h2>
              <div className="badge-resume">
                <p>März 2023 - Mai 2024</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>Certificate of web developing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc.
              </p>
            </div>
          </div>
          <div className="divider-resume"></div>

          {/* Item ----- 03 */}
          <div className="item-resume">
            <div className="item-heading">
              <h2>DCI Digital Career Institute</h2>
              <div className="badge-resume">
                <p>März 2023 - Mai 2024</p>
              </div>
            </div>

            <div className="info-resume">
              <h3>Certificate of web developing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc.
              </p>
            </div>
          </div>
          <div className="divider-resume"></div>

          <a href={CV} download rel="noreferrer">
            <button>
              Résumé
              <div className="btn-resume">
                <i className="fa-solid fa-download"></i>
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
