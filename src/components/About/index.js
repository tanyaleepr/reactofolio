import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/tanya.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hi, I'm Tanya Lee and I run this website to provide small businesses or independent entrepreneurs like yourself with high quality business services and resources. Let me show you how to grow your business with my website services.
				</p>
				
			</div>
		</section>
	);
}

export default About;