import "./infoTab.scss";
import TypedReactHook from "../typedReactHook/typedReactHook";

function InfoTab() {
	return (
		<>
			<div className="home__content">
				<div class="home__data infoTab">
					<div className="home__icons">
						<div className="home__social">
							<a
								href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-bos%C3%A1k-338195262/"
								target="_blank"
								className="home__social-icon"
							>
								<i className="uil uil-linkedin-alt"></i>
							</a>
							<a
								href="https://github.com/wodosharlatan"
								target="_blank"
								className="home__social-icon"
							>
								<i className="uil uil-github-alt"></i>
							</a>
						</div>
						<h1 id="hi" className="home__title">
							Hi 👋
						</h1>
					</div>
					<h2 id="tom" className="home__subtitle">
						I'm Tom
					</h2>
					<h3 class="home__description">
                        <TypedReactHook/>
					</h3>
				</div>
			</div>
		</>
	);
}

export default InfoTab;
