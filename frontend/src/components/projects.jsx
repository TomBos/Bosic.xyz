function Projects() {
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
                href="https://github.com/wodosharlatan"
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
          <a
            href="https://github.com/wodosharlatan/Talker"
            target="_blank"
            className="div-project-card full fill-talker w-inline-block "
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">Talker</h3>
              <p className="body-paragraph truncate">
                Talker is a chat app with built-in file sharing. Connect
                instantly, exchange files effortlessly. Enjoy real-time
                communication in your team.
              </p>
              <div className="div-view-project">
                <div className="body-paragraph high-emphasis selected-work fa-solid"></div>
                <div className="body-paragraph high-emphasis selected-work">
                  View Project
                </div>
                <div className="body-paragraph high-emphasis selected-work fa-light">
                  
                </div>
              </div>
            </div>
            <div className="project-image-border">
              <img
                src="./Talker.png"
                alt="Talker"
                height="273"
                width="2500"
                loading="lazy"
                className="image-project condensed "
              />
            </div>
          </a>
          <a
            href="https://github.com/wodosharlatan/Talker"
            target="_blank"
            className="div-project-card half card-m-left fill-bb hidden w-inline-block"
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">Talker</h3>
              <p className="body-paragraph truncate">
                Talker is a chat app with built-in file sharing. Connect
                instantly, exchange files effortlessly. Enjoy real-time
                communication in your team.
              </p>
              <div className="div-view-project">
                <div className="body-paragraph high-emphasis selected-work fa-solid">
                  <br />
                </div>
                <div className="body-paragraph high-emphasis selected-work">
                  View Project
                </div>
                <div className="body-paragraph high-emphasis selected-work fa-light">
                  
                </div>
              </div>
            </div>
            <div className="project-image-border-mobile">
              <img
                src="./Talker.png"
                alt="Talker"
                height="273"
                width="2500"
                loading="lazy"
                className="image-project condensed"
              />
            </div>
          </a>

          <a
            href="https://github.com/wodosharlatan/QuickNote"
            className="div-project-card half card-m-left fill-joyful w-inline-block"
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">Quick Note</h3>
              <p className="body-paragraph card truncate">
                Super simple note taking app, Quick Note is a simple note taking
                app that helps you to take notes, create to-do lists, and manage
                users.
                <br />
              </p>
              <div className="div-view-project">
                <div className="body-paragraph high-emphasis selected-work fa-solid"></div>
                <div className="body-paragraph high-emphasis selected-work">
                  View Project
                </div>
                <div className="body-paragraph high-emphasis selected-work fa-light">
                  
                </div>
              </div>
            </div>
            <img
              src="./QuickNote.png"
              width="700"
              height="300"
              alt=""
              className="image-project half image-project-quicknote"
            />
          </a>
          <a
            href="https://github.com/wodosharlatan"
            className="div-project-card half card-m-right fill-homerun w-inline-block"
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">API Projects</h3>
              <p className="body-paragraph card truncate">
                I have worked on several API projects, including a shared
                shopping list, API for e-shop, music player and a image saving
                server.
                <br />
              </p>
              <div className="div-view-project">
                <div className="body-paragraph high-emphasis selected-work fa-solid"></div>
                <div className="body-paragraph high-emphasis selected-work">
                  View Projects
                </div>
                <div className="body-paragraph high-emphasis selected-work fa-light">
                  
                </div>
              </div>
            </div>
            <img
              src="./Gears.png"
              width="494"
              height="273"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 43vw"
              alt=""
              className="image-project half"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;