import React from "react";

function Resume({ currentNavLink }) {
	if (currentNavLink === "Resume") {
		return <div>This is my Resume!</div>;
	} else {
		return null;
	}
}

export default Resume;
