import React from 'react';
import useGlobal from '../../factory/store';

export default function HelpCommand(props) {
	const { logItem } = props;
	const [, globalActions] = useGlobal();

	return (
		<span className="output-item colorblock helpcommand" onClick={() => globalActions.submitCommand(logItem.command)}>
			<span className="command">{logItem.command}</span>
			<span className="seperator">|</span>
			<span className="text">{logItem.text}</span>
		</span>
	);
}
