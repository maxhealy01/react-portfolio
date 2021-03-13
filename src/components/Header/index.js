import React from "react";
import Nav from "../Navigation";

function Header(props) {
	const { navLinks = [], setCurrentNavLink, currentNavLink } = props;

	return (
		<header className="flex-row px-1">
			<h2>Max Healy</h2>
			<Nav
				navLinks={navLinks}
				setCurrentNavLink={setCurrentNavLink}
				currentNavLink={currentNavLink}
			></Nav>
		</header>
	);
}

export default Header;
