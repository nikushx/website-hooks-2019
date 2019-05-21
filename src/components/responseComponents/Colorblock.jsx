import React from 'react';

import './Colorblock.scss';

export default function Colorblock(props) {
	const { logItem, textColor } = props;

	return (
		<span className="output-item colorblock" style={{ color: textColor }}>
			{logItem.text}
		</span>
	);
}
