import HomeIcon from "../icons/homeIcon";
import CodeIcon from "../icons/codeIcon";
import GithubIcon from "../icons/githubIcon";
import "./navbar.scss";

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
								<a href="#" className="nav__link active-link">
									 Home   <HomeIcon className="nav__icon" />
								</a>
							</li>

							<li className="nav__item">
								<a href="#services" className="nav__link">
									 Services   <CodeIcon className="nav__icon" />
								</a>
							</li>

							<li className="nav__item">
								<a href="#portfolio" className="nav__link">
									 Portfolio  <GithubIcon className="nav__icon" />
								</a>
							</li>

						</ul>
					
					</div>

					
				</nav>
			</header>
		</>
	);
}

export default Navbar;
