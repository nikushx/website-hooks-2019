import React, { useEffect } from 'react';

import './ConsoleOutput.scss';
import useGlobal from '../factory/store';
import getLogItems from '../factory/logItemCreator';

export const ConsoleOutput = (props) => {
	const [globalStore] = useGlobal();
	const { log } = globalStore;

	const { appRef } = props;

	useEffect(() => {
		setTimeout(() => {
			appRef.current.scrollTop = appRef.current.scrollHeight;
		}, 250)
	});

	const output = log.map((logItem, i) => {
		return getLogItems(logItem, i);
	});

	return <div className="ConsoleOutput">{output}</div>;
};
