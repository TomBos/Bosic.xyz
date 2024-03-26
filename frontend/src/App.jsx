import "./main.scss";

function App() {
	return (
		<>
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
							web applications. I mostly write code in JavaScript. I am also a
							big fan of open-source projects and coffee.
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
									Super simple note taking app, Quick Note is a simple note
									taking app that helps you to take notes, create to-do lists,
									and manage users.
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
							As a Backend Developer from the Czech Republic, I'm passionate
							about crafting web applications and continuously honing my skills.
							With over 4 years of experience, I specialize in JavaScript,
							delving into frameworks like Node.js, React, and Docker. I've also
							ventured into C# and .NET Framework developing mobile apps.
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
								<h5
									id="Company-Location"
									className="body-paragraph low-emphasis"
								>
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
								<h5
									id="Company-Location"
									className="body-paragraph low-emphasis"
								>
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
											<img
												src="./mysql-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
											/>
											<img
												src="./mongodb-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
											/>
											<img
												src="./googlecloud.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
											/>
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
											understanding what users truly need, avoiding guesswork,
											and coming up with genuine solutions that work.
										</p>
										<div className="div-image-skills" aria-hidden="true">
											<img
												src="./react-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./sass-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./javascript-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
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
											<img
												src="./docker-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./git-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./github-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./gitlab-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
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
											for all walks of life while reassuring they will respond
											the same on any browser.&nbsp;
										</p>
										<div className="div-image-skills" aria-hidden="true">
											<img
												src="./windows.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./apple-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./linux-original.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
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
											specialize in accessibility while utilizing Material
											Design and a little bit of improvisation.
										</p>
										<div className="div-image-skills" aria-hidden="true">
											<img
												src="./csharp-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./android-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
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
											<img
												src="./nodejs-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./npm.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
											<img
												src="./php-plain.svg"
												width="35"
												height="35"
												alt=""
												className="image-skill"
												aria-hidden="true"
											/>
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
			<div id="section-contact" className="content-section contact">
				<div className="section-header w-container">
					<div className="div-section-header">
						<div className="section-header-column w-row">
							<div className="column-svg-n-title w-col w-col-9">
								<h1 className="heading-5">🤙</h1>
								<h1 className="h2">Contact</h1>
							</div>
							<div className="column-view-more w-col w-col-3">
								<a
									href="#"
									target="_blank"
									className="link-block w-inline-block"
								>
									<div className="section-header-link"></div>
								</a>
								<div className="section-header-link icon"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-homepage w-container">
					<div className="div-text-l">
						<p className="body-hero contact">
							Are you interested in collaborating or want to connect or chat? If
							so, hit the contact button down below or &nbsp;
							<a
								href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-bos%C3%A1k/"
								target="_blank"
							>
								contact me via LinkedIn
							</a>
							.
						</p>
						<a
							href="mailto:tombos255@gmail.com?subject=Contact%20via%20Portfolio"
							className="button w-button"
							data-ix="new-interaction"
						>
							Contact Me
						</a>
					</div>
					<div className="div-image-r _2-up">
						<img
							src="./telephone.jpg"
							alt="phone me"
							className="image-placement small"
						/>
						<img
							src="./coffee.jpg"
							alt="coffee"
							className="image-placement small long"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
