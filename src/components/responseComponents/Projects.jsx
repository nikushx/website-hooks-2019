import React, { useState } from 'react';

import './Projects.scss';
import { projects } from '../../factory/responseCreator';
import Project from './Project';

export default function Projects(props) {
	const [showAll, setShowAll] = useState(false);

	const projectsList = [];
	for (let projectKey in projects) {
		if (!showAll && projectsList.length === 3) {
			break;
		}
		const project = projects[projectKey];
		projectsList.push(
			<Project project={project} />
		);
	}

	return (
		<>
			<div className="output-item projects-container">
				<div className="projects-list">
					{projectsList}{' '}
				</div>
				<span
					className="project-history-toggle"
					onClick={() => setShowAll(!showAll)}
				>
					{(showAll) ? 'Hide' : 'Show'} full project history
				</span>
			</div>
		</>
	);
}
