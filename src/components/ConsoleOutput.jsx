import React from 'react';

import './ConsoleOutput.scss';
import useGlobal from '../factory';
import getLogItems from '../factory/logItemCreator';

export const ConsoleOutput = () => {
	const [globalStore] = useGlobal();
	const { log } = globalStore;

	const output = log.map((logItem, i) => {
		return getLogItems(logItem, i);
	});

	return <div className="ConsoleOutput">{output}</div>;
};
