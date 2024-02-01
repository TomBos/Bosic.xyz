import "./portfolio.scss";
import { FaArrowRight } from "react-icons/fa6";

function Portfolio() {
	return (
		<>
			<div className="flex__container">
				<div className="emoji__container">
					<h1 className="heading__emoji">✍️</h1>
					<h1 className="heading">Selected Work</h1>
				</div>
				<div className="links__container">
					<a
						href="https://github.com/wodosharlatan"
						target="_blank"
						className="href"
					>
						View Github
					</a>
					<FaArrowRight className="arrow__icon" />
				</div>
			</div>

			<hr />
		</>
	);
}

export default Portfolio;
