import HomeIcon from "../icons/homeIcon";
import CodeIcon from "../icons/codeIcon";
import GithubIcon from "../icons/githubIcon";

function Navbar() {
	return (
		<>
			<header className="header" id="header">
				<nav className="nav container">
					<a href="/" id="brand__name" className="nav__logo">
						Tomáš Bosák
					</a>

					<div className="nav__menu " id="nav-menu">
						<ul className="nav__list grid">
							<li className="nav__item">
								<a href="#home" className="nav__link active-link">
									<HomeIcon className="nav__icon" /> Home
								</a>
							</li>

							<li className="nav__item">
								<a href="#services" className="nav__link">
									<CodeIcon className="nav__icon" /> Services
								</a>
							</li>

							<li className="nav__item">
								<a href="#portfolio" className="nav__link">
									<GithubIcon className="nav__icon" /> Portfolio
								</a>
							</li>

						</ul>
						<i
							className="uil uil-times nav__close nav__icon"
							id="nav-close"
						></i>
					</div>

					
				</nav>
			</header>
		</>
	);
}

export default Navbar;
