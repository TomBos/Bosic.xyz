function Hero() {
  return (
    <div className="section---hero">
      <div id="section-home" className="section-homepage w-container">
        <div className="div-text-l">
          <h1 className="heading-4">
            <strong className="bold-text">👋</strong>
          </h1>
          <h1 className="heading-3">
            <strong className="h1">Hello, I am Tomáš Bosák</strong>
          </h1>
          <p className="body-hero">
            I am a Backend Developer with 4+ years of experience, focusing on
            web applications. I mostly write code in JavaScript. I am also a big
            fan of open-source projects and coffee.
          </p>
        </div>
        <div className="div-image-r">
          <img
            src="./ProfilePicture.jpg"
            sizes="(max-width: 767px) 100vw, 43vw"
            alt=""
            className="image-placement"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
