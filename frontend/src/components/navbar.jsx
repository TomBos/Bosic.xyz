function Navbar() {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container-5 w-container">
        <a
          href="/"
          aria-current="page"
          aria-label="home"
          className="w-nav-brand w--current"
        >
          <img
            height={70}
            className="logo"
            src="./B.svg"
            alt="logo"
            sizes="(max-width: 767px) 100vw, 43vw"
          />
        </a>
        <nav role="navigation" className="w-nav-menu">
          <a href="#section-home" className="navigation-item w-nav-link">
            Home
          </a>
          <a
            href="#section-work"
            className="navigation-item w-nav-link w--current"
          >
            Work
          </a>
          <a href="#section-about" className="navigation-item w-nav-link">
            About
          </a>
          <a href="#section-contact" className="navigation-item w-nav-link">
            Contact
          </a>
        </nav>
        <div
          className="menu-button w-nav-button"
          aria-label="menu"
          role="button"
          tabIndex="0"
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
      ></div>
    </div>
  );
}

export default Navbar;
