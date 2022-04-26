//Reference the Project.js to pull each JS file.
import React from 'react';
import Project from '../Project';


function Portfolio() {
	const projects = [
		{
			name: 'Access Tennessee',
			description:
				'Access Tennessee is an app that strives to make this state more accommodating and accessible to all people.',
			image: 'at.jpeg',
			technologies: [
				'HTML/CSS', 
				'  JavaScript',
				'  Node.js',
				'  Express & MySQL',
				'  Heroku',
				'  React.js',
			],
			github: 'https://github.com/pshertzi/Access-Tennessee',
			deployed: 'https://access-tennesee.herokuapp.com/',
		},
		{
			name: 'Super Fan',
			description:
				'Super Fan is an interactive front-end project for music fans to search for their favorite lyrics and albums.',
			image: 'superfan.png',
			technologies: [
				'HTML/CSS',
				'  JavaScript',
				'  jQuery',
				'  APIs',
				'  Bootstrap',
			],
			github: 'https://github.com/comcel1/super-fan',
			deployed: 'https://comcel1.github.io/super-fan/',
		},
		{
			name: 'Run Buddy',
			description:
				'Fitness website is a landing page ready to be published.',
			image: 'runbuddy.png',
			technologies: [
				' HTML & CSS',
	
			],
			github: 'https://github.com/tanyaleepr/run-buddy-website',
			deployed: 'https://tanyaleepr.github.io/run-buddy-website/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for different cities.',
			image: 'weatherdashboard.jpeg',
			technologies: ['HTML/CSS', '  JavaScript', '  APIs'],
			github: 'https://github.com/tanyaleepr/weather-dashboard',
			deployed: 'https://tanyaleepr.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a secured password from 8 - 128 characters based on criteria you select.',
			image: 'password.png',
			technologies: ['HTML/CSS', '  JavaScript'],
			github: 'https://github.com/tanyaleepr/password-for-security',
			deployed: 'https://tanyaleepr.github.io/password-for-security/',
		},
			];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;