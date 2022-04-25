import React from "react";
import Nav from "../Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Tanya's React Portfolio</h2>
			</div>
			<div>
				<nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></nav>
			</div>
		</header>
	);
}

export default Header;