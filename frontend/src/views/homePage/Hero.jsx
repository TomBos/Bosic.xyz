import "./hero.scss"

import Navbar from "../../components/navbar/navbar";
import Blob from "../../components/icons/blob";
import InfoTab from "../../components/infoTab/infoTab";

function Hero() {
	return (
		<>
			<Navbar />
			<div className="section">
				<div id="hero__section">
					<InfoTab className="infoTab" />
					<Blob />
				</div>
			</div>
		</>
	);
}

export default Hero;
