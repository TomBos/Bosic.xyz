import "../main.scss";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

function HomePage() {
	return (
		<>

			{/* Navbar Component (1) */}
			<Navbar />
			

			{/* Hero Section Component (1) */}
			<Hero />


			{/* Projects Components (1L-2S) */}
			<Projects />


			{/* About Section Component (1) */}
			<About />

			{/* Contact Section Component (1) */}
			<Contact />
			
		</>
	);
}

export default HomePage;
