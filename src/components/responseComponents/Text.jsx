import React from 'react';

export default function Text(props) {
	const { logItem, textColor } = props;

	return (
		<span className="output-item" style={{ color: textColor }}>
			{logItem.text}
		</span>
	);
}
