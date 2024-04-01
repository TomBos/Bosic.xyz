function Contact(){
    return(
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
    )
}

export default Contact;