import "./main.scss";
import "./app.scss";

import Hero from "./views/homePage/Hero";
import Divider from "./components/divider/divider";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
	return (
		<>
			<Parallax pages={2}>

			

				<ParallaxLayer sticky={{start: 0, end: 0.25}}   >
					<Hero />
				</ParallaxLayer>

				<ParallaxLayer  speed={1} offset={1} >
					<Divider />
					<div className="section section__black">
						
					</div>
				</ParallaxLayer>

				


			</Parallax>
		</>
	);
}

export default App;
