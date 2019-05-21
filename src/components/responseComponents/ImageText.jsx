import React, {useEffect} from 'react';

import './ImageText.scss';

export default function ImageText(props) {
	const { logItem, textColor } = props;

	useEffect( () => {
		if (logItem.redirect) {
			setTimeout( () => {
				window.open(logItem.redirect, '_blank');
			}, 2000 );
		}
	}, [logItem.redirect] );
	
	const imgClasses = `${(logItem.rotate) ? 'rotate' : undefined}`;

	return (
		<div className="output-item imagetext">
			<div className="image-container">
				<img className={imgClasses} src={logItem.imageSrc} alt="" />
			</div>
			<div className="text-container">
				<h3>{logItem.title}</h3>
				<span className="text" style={{ color: textColor }}>
					{logItem.text}
				</span>
			</div>
		</div>
	);
}
