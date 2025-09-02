import DoubleLengthProject from "../controllers/project_double";
import SingleProject from "../controllers/project_single";

function Projects() {
  const TalkerDescription =
    "Talker is a chat app with built-in file sharing. Connect instantly, exchange files effortlessly. Enjoy real-time communication in your team.";
  const QuickNoteDescription =
    "Super simple note taking app, Quick Note is a simple note taking app that helps you to take notes, create to-do lists, and manage users.";
  const APIProjectsDescrition =
    "I have worked on my several API projects, including a shared shopping list, API for e-shop, music player and a image saving server. ";

  return (
    <div id="section-work" className="content-section">
      <div className="section-header w-container">
        <div className="div-section-header">
          <div className="section-header-column w-row">
            <div className="column-svg-n-title w-col w-col-9">
              <h1 className="heading-5">✍️</h1>
              <h1 className="h2">Selected Work</h1>
            </div>
            <div className="column-view-more w-col w-col-3">
              <a
                href="https://github.com/TomBos"
                target="_blank"
                className="link-block w-inline-block"
              >
                <div className="section-header-link">View Github</div>
              </a>
              <div className="section-header-link icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-homepage w-container">
        <div className="div-card-list">
          <DoubleLengthProject
            name="Talker"
            description={TalkerDescription}
            href="https://github.com/TomBos/Talker"
            imgSource="./Talker.png"
            alt="Talker"
          />

          <SingleProject
            fill={
              "div-project-card half card-m-left fill-joyful w-inline-block"
            }
            name="Quick Note"
            description={QuickNoteDescription}
            href="https://github.com/TomBos/QuickNote"
            imgSource="./QuickNote.png"
            alt="Quick Note"
            width={700}
            height={300}
          />

          <SingleProject
            fill={
              "div-project-card half card-m-right fill-homerun w-inline-block"
            }
            name="API Projects"
            description={APIProjectsDescrition}
            href="https://github.com/TomBos"
            imgSource="./Gears.png"
            alt="API Projects"
            width={494}
            height={273}
            optionalSizes={
              "(max-width: 479px) 100vw, (max-width: 767px) 90vw, 43vw"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
