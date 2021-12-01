import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
	const [projects, setProjects] = useState();
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/jsonfiles/main/projectInfo.json'
		)
			.then(res => res.json())
			.then(data => setProjects(data));
	}, []);
	return (
		<div>
			<h1>My Projects</h1>
			<div className='projects-container'>
				{projects?.map(project => (
					<Project data={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
