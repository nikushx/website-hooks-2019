import React from 'react';
import HelpCommand from '../components/responseComponents/HelpCommand';
import Link from '../components/responseComponents/Link';
import Colorblock from '../components/responseComponents/Colorblock';
import Text from '../components/responseComponents/Text';
import ImageText from '../components/responseComponents/ImageText';

const getLogItems = (logItem, i) => {
	let textColor = logItem.color || 'white';

	const sendProps = {
		key: i,
		logItem,
		textColor
	}

	switch (logItem.type) {
		case 'imagetext':
			return <ImageText {...sendProps} />
		case 'link':
			return <Link {...sendProps} />;
		case 'helpcommand':
			return <HelpCommand {...sendProps} />;
		case 'colorblock':
			return <Colorblock {...sendProps} />;
		case 'text':
			return <Text {...sendProps} />;
		default:
			alert('Invalid Type: ' + logItem.type);
	}
};

export default getLogItems;
