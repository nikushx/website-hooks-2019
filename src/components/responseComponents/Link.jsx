import React from 'react';

export default function Link(props) {
	const { logItem, textColor } = props;

	return (
		<a
			href={logItem.href}
			className="output-item"
			style={{ color: textColor }}
		>
			{logItem.text}
		</a>
	);
}
