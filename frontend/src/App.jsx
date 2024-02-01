import "./main.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Hero />
				<Portfolio />
			</div>
		</>
	);
}

export default App;
