import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IconText.scss';
import useGlobal from '../../factory/store';

export default function IconText(props) {
	const { logItem } = props;
	const [, globalActions] = useGlobal();

	const onClick = () => {
		if ( logItem.command ) {
			globalActions.submitCommand( logItem.command );
		}
	}

	const desktopText = (!logItem.text && logItem.mobileText) ? logItem.mobileText : logItem.text;
	const mobileText = (!logItem.mobileText && logItem.text) ? logItem.text : logItem.mobileText;

	const icontextWrapperClasses = `icontext-wrapper output-item ${logItem.small ? 'small' : ''} ${logItem.alternateColor ? 'color-secondary' : ''} ${logItem.fullWidth ? 'full' : ''}`

	return (
		<a
			href={logItem.link}
			onClick={onClick}
			target="_blank"
			rel="noopener noreferrer"
			className={icontextWrapperClasses}
		>
			<FontAwesomeIcon className="icon" icon={logItem.icon} />
			<span className="text desktop">{desktopText}</span>
			<span className="text mobile">{mobileText}</span>
		</a>
	);
}
