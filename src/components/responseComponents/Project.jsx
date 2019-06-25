import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function Project(props) {
	const { project } = props;
	const [expand, setExpand] = useState(false);

	const projectClasses = expand ? `project expand` : `project`;
	const toggleClasses = expand ? 'open' : '';

	const onProjectClick = (e) => {
		setExpand(!expand);
	}

	const onLinkClick = (e) => {
		e.stopPropagation();
	}

	return (
		<div className="project-wrapper" onClick={onProjectClick}>
			<div className="open-toggle">
				<FontAwesomeIcon className={toggleClasses} icon={faCaretRight} />
			</div>
			<div className={projectClasses}>
				<div className="image-container">
					<img src={project.imageSrc} alt="" />
				</div>
				<div className="text">
					<div className="small-logo-container">
						<img src={project.imageSrc} alt="" />
					</div>
					<span className="title">{project.title}</span>
					<span className="subtitle">{project.subtitle}</span>
					{expand ? (
						<>
							<span className="date">{project.dates}</span>
							<span className="status">Status: {project.status}</span>
							<span className="description">{project.text}</span>
						</>
					) : (
						undefined
					)}
					<a href={project.linkHref} onClick={onLinkClick} target="_blank" rel="noopener noreferrer" className="link">Visit Project</a>
				</div>
			</div>
		</div>
	);
}
