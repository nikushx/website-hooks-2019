import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function Job(props) {
	const { job } = props;
	const [expand, setExpand] = useState(false);

	const jobClasses = expand ? `job expand` : `job`;
	const toggleClasses = expand ? 'open' : '';
	return (
		<div className="job-wrapper" onClick={() => setExpand(!expand)}>
			<div className="open-toggle">
				<FontAwesomeIcon className={toggleClasses} icon={faCaretRight} />
			</div>
			<div className={jobClasses} >
				<div className="image-container">
					<img src={job.imageSrc} alt="" />
				</div>
				<div className="text">
					<div className="small-logo-container">
						<img src={job.imageSrc} alt="" />
					</div>
					<span className="title">{job.title}</span>
					<span className="position">{job.position}</span>
					{expand ? (
						<>
							<span className="date">{job.dates}</span>
							<span className="location">{job.location}</span>
							<span className="description">{job.text}</span>
						</>
					) : (
						undefined
					)}
				</div>
			</div>
		</div>
	);
}
