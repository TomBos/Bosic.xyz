import ImageDiv from "../controllers/about_image_div";

function About() {
  return (
    <div id="section-about" className="content-section">
      <div className="section-header w-container">
        <div className="div-section-header">
          <div className="section-header-column w-row">
            <div className="column-svg-n-title w-col w-col-9">
              <h1 className="heading-5">👨&zwj;💻</h1>
              <h1 className="h2">About</h1>
            </div>
            <div className="column-view-more w-col w-col-3">
              <a
                href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-bos%C3%A1k/"
                target="_blank"
                className="link-block w-inline-block"
              >
                <div className="section-header-link">View Linkedin</div>
              </a>
              <div className="section-header-link icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-homepage w-container">
        <div className="div-text-l j-top">
          <h4 className="heading-6">My&nbsp;Story</h4>
          <p className="body-paragraph">
            As a Backend Developer from the Czech Republic, I'm passionate about
            crafting web applications and continuously honing my skills. With
            over 4 years of experience, I specialize in JavaScript, delving into
            frameworks like Node.js, React, and Docker. I've also ventured into
            C# and .NET Framework developing mobile apps.
            <br />
            <br />
            My proficiency extends to html, css, php, git as well as SQL and
            NoSQL databases. Comfortable with both Windows and Linux systems.
            <br />
            <br />I operate at an English proficiency level of B2, adept at
            reading documentation and coding in both languages. Feel free to
            explore my open-source projects on my GitHub profile. Thanks for
            stopping by, and have a fantastic day ahead!
          </p>
        </div>
        <div className="div-text-r j-top">
          <h4 className="heading-6">Where I've Worked</h4>
          <div className="div-block-6">
            <div className="div-work-history mb-25">
              <h5 className="heading-7">2023 - 2023 (2 Months)</h5>
              <h5 className="body-paragraph high-emphasis">CIS</h5>
              <h5 id="Company-Location" className="body-paragraph low-emphasis">
                Jičín, Czech Republic
              </h5>
              <h5 className="body-paragraph">Junior Software Tester</h5>
            </div>
          </div>
          <div className="div-block-6">
            <div className="div-work-history mb-25">
              <h5 className="heading-7">weekends</h5>
              <h5 className="body-paragraph high-emphasis">
                Trade Certificate
              </h5>
              <h5 id="Company-Location" className="body-paragraph low-emphasis">
                Prague, Czech Republic
              </h5>
              <h5 className="body-paragraph">Commissioned projects</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container my-skillsets w-container">
        <div className="div-about-text my-skillsets">
          <h4 className="heading-6">My Skillsets</h4>
        </div>
        <div className="div-block-5">
          <div
            data-delay="4000"
            data-animation="slide"
            className="card-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="5"
            data-duration="500"
            data-infinite="true"
            role="region"
            aria-label="carousel"
          >
            <div
              className="card-slider-mask w-slider-mask"
              id="w-slider-mask-0"
            >
              <div
                className="skill-carousel w-slide"
                aria-label="1 of 6"
                role="group"
              >
                <div className="div-skillset">
                  <h1 className="h3 skill-heading">Database Management</h1>
                  <p className="paragraph-skills">
                    Known for attention to detail, I prioritize creating
                    organized and efficient database structures.
                  </p>
                  <div className="div-image-skills">
                    <ImageDiv imgSrc="./mysql-plain.svg" />
                    <ImageDiv imgSrc="./mongodb-original.svg" />
                    <ImageDiv imgSrc="./googlecloud.svg" />
                  </div>
                </div>
              </div>
              <div
                className="skill-carousel w-slide"
                aria-label="2 of 6"
                role="group"
                aria-hidden="true"
              >
                <div className="div-skillset" aria-hidden="true">
                  <h1 className="h3 skill-heading" aria-hidden="true">
                    Frontend Development
                  </h1>
                  <p className="paragraph-skills" aria-hidden="true">
                    Getting to the core of a problem is crucial. I focus on
                    understanding what users truly need, avoiding guesswork, and
                    coming up with genuine solutions that work.
                  </p>
                  <div className="div-image-skills" aria-hidden="true">
                    <ImageDiv imgSrc="./react-original.svg" />
                    <ImageDiv imgSrc="./sass-original.svg" />
                    <ImageDiv imgSrc="./javascript-plain.svg" />
                  </div>
                </div>
              </div>
              <div
                className="skill-carousel w-slide"
                aria-label="3 of 6"
                role="group"
                aria-hidden="true"
              >
                <div className="div-skillset" aria-hidden="true">
                  <h1 className="h3 skill-heading" aria-hidden="true">
                    Project Management
                  </h1>
                  <p className="paragraph-skills" aria-hidden="true">
                    CI/CD ensures smooth integration and deployment of code
                    changes, enabling swift and reliable software delivery.
                  </p>
                  <div className="div-image-skills" aria-hidden="true">
                    <ImageDiv imgSrc="./docker-plain.svg" />
                    <ImageDiv imgSrc="./git-plain.svg" />
                    <ImageDiv imgSrc="./github-original.svg" />
                    <ImageDiv imgSrc="./gitlab-plain.svg" />
                  </div>
                </div>
              </div>
              <div
                className="skill-carousel w-slide"
                aria-label="4 of 6"
                role="group"
                aria-hidden="true"
              >
                <div className="div-skillset" aria-hidden="true">
                  <h1 className="h3 skill-heading" aria-hidden="true">
                    Web
                  </h1>
                  <p className="paragraph-skills" aria-hidden="true">
                    My web projects are responsive, accessible, and intuitive
                    for all walks of life while reassuring they will respond the
                    same on any browser.&nbsp;
                  </p>
                  <div className="div-image-skills" aria-hidden="true">
                    <ImageDiv imgSrc="./windows.svg" />
                    <ImageDiv imgSrc="./apple-original.svg" />
                    <ImageDiv imgSrc="./linux-original.svg" />
                  </div>
                </div>
              </div>
              <div
                className="skill-carousel w-slide"
                aria-label="5 of 6"
                role="group"
                aria-hidden="true"
              >
                <div className="div-skillset" aria-hidden="true">
                  <h1 className="h3 skill-heading" aria-hidden="true">
                    Mobile
                  </h1>
                  <p className="paragraph-skills" aria-hidden="true">
                    The foundation for all my designs, my mobile projects
                    specialize in accessibility while utilizing Material Design
                    and a little bit of improvisation.
                  </p>
                  <div className="div-image-skills" aria-hidden="true">
                    <ImageDiv imgSrc="./android-plain.svg" />
                    <ImageDiv imgSrc="./csharp-plain.svg" />
                    <ImageDiv imgSrc="./androidstudio.svg" />
                  </div>
                </div>
              </div>
              <div
                className="skill-carousel w-slide"
                aria-label="6 of 6"
                role="group"
                aria-hidden="true"
              >
                <div className="div-skillset" aria-hidden="true">
                  <h1 className="h3 skill-heading" aria-hidden="true">
                    Backend Development
                  </h1>
                  <p className="paragraph-skills" aria-hidden="true">
                    Addressing issues at their core is crucial. I focus on
                    understanding user needs, bypassing assumptions, and
                    devising authentic solutions for backend development.
                  </p>
                  <div className="div-image-skills" aria-hidden="true">
                    <ImageDiv imgSrc="./nodejs-plain.svg" />
                    <ImageDiv imgSrc="./npm.svg" />
                    <ImageDiv imgSrc="./php-plain.svg" />
                  </div>
                </div>
              </div>
              <div
                aria-live="off"
                aria-atomic="true"
                className="w-slider-aria-label"
                data-wf-ignore=""
              ></div>
            </div>
            <div
              className="hero-slider_arrow-button w-slider-arrow-left"
              role="button"
              tabIndex="0"
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div className="display-none w-icon-slider-left"></div>
            </div>
            <div
              className="hero-slider_arrow-button display-none w-slider-arrow-right"
              role="button"
              tabIndex="0"
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
            >
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="card-slider_dot-navigation w-slider-nav w-round">
              <div
                className="w-slider-dot w-active"
                data-wf-ignore=""
                aria-label="Show slide 1 of 6"
                aria-pressed="true"
                role="button"
                tabIndex="0"
              ></div>
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 2 of 6"
                aria-pressed="false"
                role="button"
                tabIndex="-1"
              ></div>
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 3 of 6"
                aria-pressed="false"
                role="button"
                tabIndex="-1"
              ></div>
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 4 of 6"
                aria-pressed="false"
                role="button"
                tabIndex="-1"
              ></div>
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 5 of 6"
                aria-pressed="false"
                role="button"
                tabIndex="-1"
              ></div>
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 6 of 6"
                aria-pressed="false"
                role="button"
                tabIndex="-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
