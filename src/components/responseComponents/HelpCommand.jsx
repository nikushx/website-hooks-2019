import React from 'react';

export default function HelpCommand(props) {
	const { logItem } = props;

	return (
		<span className="output-item colorblock helpcommand">
			<span className="command">{logItem.command}</span>
			<span className="seperator">|</span>
			<span className="text">{logItem.text}</span>
		</span>
	);
}
