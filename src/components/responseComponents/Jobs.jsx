import React, { useState } from 'react';

import './Jobs.scss';
import { jobs } from '../../factory/responseCreator';
import Job from './Job';

export default function Jobs(props) {
	const [showAll, setShowAll] = useState(false);

	const jobsList = [];
	for (let jobKey in jobs) {
		if (!showAll && jobsList.length === 3) {
			break;
		}
		const job = jobs[jobKey];
		jobsList.push(
			<Job job={job} />
		);
	}

	return (
		<>
			<div className="output-item jobs-container">
				<div className="jobs-list">
					{jobsList}{' '}
				</div>
				<span
					className="job-history-toggle"
					onClick={() => setShowAll(!showAll)}
				>
					{(showAll) ? 'Hide' : 'Show'} full job history
				</span>
			</div>
		</>
	);
}
