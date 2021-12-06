import React from 'react';
import Typed from 'react-typed';

const About = () => {
	return (
		<div>
			<h1>Hi There!👋🏻</h1>
			<Typed
				strings={[
					"I'm a Javascript Developer",
					"I'm a React Developer",
					"I'm a MERN stack Developer",
				]}
				loop
				typeSpeed={40}
				backSpeed={50}
				style={{ fontSize: '2.5em', color: '#fafafa' }}
			/>
			<p className='introduce'>
				I am a professional web developer, enthusiastic, and keen to contribute
				to the team's success through hard work, attention to detail, and
				excellent organizational skills.
				<br />
				<br />
				I'm Motivated to learn, and grow in technology-related fields. I have a
				clear understanding of coding and web development. Recently I've
				completed a 6month web development Course from a well known Institute
				called Programming Hero. 😀
			</p>
			<div className='skills-container'>
				<h2>My Skills</h2>
				<ul className='skills'>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Javascript</li>
					<li>React JS</li>
					<li>Node JS</li>
					<li>Express JS</li>
					<li>Mongo DB</li>
					<li>Firebase</li>
					<li>GitHub</li>
					<li>React Router</li>
					<li>Rest API</li>
					<li>Heroku</li>
					<li>Bootstrap</li>
					<li>Material UI</li>
					<li>Tailwind CSS</li>
					<li>Styled Components</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
