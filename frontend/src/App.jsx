import "./assets/css.css";
import "./main.scss";



import Navbar from "./components/navbar/navbar";


function App() {
	return (
		<>
		<Navbar />
    <h1>Web Dev</h1>

			<svg
				className="blob"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="#FF0066"
					d="M52,-64.6C62.6,-53,63.3,-32.1,65.4,-12.7C67.4,6.8,70.8,24.8,63.9,37.1C57,49.4,39.9,55.9,22.3,63.1C4.6,70.4,-13.4,78.4,-30,75.4C-46.6,72.4,-61.7,58.4,-69.4,41.7C-77.1,25,-77.4,5.6,-71.7,-10.2C-66,-26,-54.2,-38.4,-41.3,-49.6C-28.4,-60.8,-14.2,-70.9,3.2,-74.8C20.7,-78.6,41.3,-76.2,52,-64.6Z"
					transform="translate(100 100)"
				/>
			</svg>

			<div className="custom-shape-divider-bottom-1706206790">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</>
	);
}

export default App;
