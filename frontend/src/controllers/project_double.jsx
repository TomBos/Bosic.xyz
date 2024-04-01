function DoubleLengthProject ({ name, description, href, imgSource, alt }) {
    return(
        <>
            <a
            href={href}
            target="_blank"
            className="div-project-card full fill-talker w-inline-block "
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">{name}</h3>
              <p className="body-paragraph truncate">
                {description}
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
                src={imgSource}
                alt={alt}
                height="273"
                width="2500"
                loading="lazy"
                className="image-project condensed "
              />
            </div>
          </a>
          <a
            href={href}
            target="_blank"
            className="div-project-card half card-m-left fill-bb hidden w-inline-block"
          >
            <div className="div-project-content">
              <h3 className="h3 selected-work">{name}</h3>
              <p className="body-paragraph truncate">
                {description}
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
                src={imgSource}
                alt={alt}
                height="273"
                width="2500"
                loading="lazy"
                className="image-project condensed"
              />
            </div>
          </a>
        </>
        
    )
}

export default DoubleLengthProject;