import React from "react";

function Contact({ currentNavLink }) {
	if (currentNavLink === "Contact") {
		return <div>This is my contact form!</div>;
	} else {
		return null;
	}
}

export default Contact;
