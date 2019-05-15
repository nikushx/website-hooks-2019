import React from 'react';

import './ConsoleOutput.scss';
import useGlobal from '../store';

export const ConsoleOutput = () => {
	const [globalStore, globalActions] = useGlobal();
	const { log } = globalStore;

	const output = log.map(logItem => {
		return getLogItems(logItem);
	});

	return <div className="ConsoleOutput">{output}</div>;
};

const getLogItems = logItem => {
	let textColor = logItem.color || 'white';

	switch (logItem.type) {
		case 'link':
			return (
				<a
					href={logItem.href}
					className="output-item"
					style={{ color: textColor }}
				>
					{logItem.text}
				</a>
			);
		case 'biggertext':
			return (
				<span
					className="output-item bigger"
					style={{ color: textColor }}
				>
					{logItem.text}
				</span>
			);
		case 'text':
			return (
				<span className="output-item" style={{ color: textColor }}>
					{logItem.text}
				</span>
			);
		default:
			alert('Invalid Type: ' + logItem.type);
	}
};
