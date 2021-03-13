import React from "react";

function About({ currentNavLink }) {
	if (currentNavLink === "About Me") {
		return <div>This is all about me!</div>;
	} else {
		return null;
	}
}

export default About;
