import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
	const [navLinks] = useState(["About Me", "Portfolio", "Contact", "Resume"]);

	const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);

	return (
		<div>
			<Header
				navLinks={navLinks}
				setCurrentNavLink={setCurrentNavLink}
				currentNavLink={currentNavLink}
			></Header>
			<main>
				<div>
					<About currentNavLink={currentNavLink} />
					<Project currentNavLink={currentNavLink} />
					<Contact currentNavLink={currentNavLink} />
					<Resume currentNavLink={currentNavLink} />
				</div>
			</main>
		</div>
	);
}

export default App;
