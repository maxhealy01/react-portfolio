import React from "react";

function Project({ currentNavLink }) {
	if (currentNavLink === "Portfolio") {
		return <div>This is my Project form!</div>;
	} else {
		return null;
	}
}

export default Project;
