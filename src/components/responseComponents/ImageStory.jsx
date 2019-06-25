import React from 'react';

import './ImageStory.scss';

export default function ImageStory(props) {
	const { logItem } = props;

	return (
		<div className="imagestory-container">
			<div className="image-container">
				<img src={logItem.imageSrc} alt="story" />
			</div>
			<div className="text">
				<div className="heading">{logItem.heading.split(' ')[0]} <b>{logItem.heading.split(' ')[1]}</b></div>
				<span dangerouslySetInnerHTML={{__html: logItem.text}}></span>
			</div>
		</div>
	);
}
