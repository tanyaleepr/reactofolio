import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/tanyaleepr"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/648256.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/tanyagonzalez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/new-linkedin-logo-white-black-png.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://instagram.com/tanyalee_dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/87390.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;