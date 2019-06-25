import React from 'react';
import HelpCommand from '../components/responseComponents/HelpCommand';
import Link from '../components/responseComponents/Link';
import Colorblock from '../components/responseComponents/Colorblock';
import Text from '../components/responseComponents/Text';
import ImageText from '../components/responseComponents/ImageText';
import Jobs from '../components/responseComponents/Jobs';
import Projects from '../components/responseComponents/Projects';
import IconText from '../components/responseComponents/IconText';
import ImageStory from '../components/responseComponents/ImageStory';

const getLogItem = (logItem, i) => {
	let textColor = logItem.color || 'white';

	const sendProps = {
		key: i,
		logItem,
		textColor,
	};

	function sendComponentWithProps(Component) {
		return <Component {...sendProps} />;
	}

	switch (logItem.type) {
		case 'image-story':
			return sendComponentWithProps(ImageStory);
		case 'jobs':
			return sendComponentWithProps(Jobs);
		case 'projects':
			return sendComponentWithProps(Projects);
		case 'imagetext':
			return sendComponentWithProps(ImageText);
		case 'icontext':
			return sendComponentWithProps(IconText);
		case 'link':
			return sendComponentWithProps(Link);
		case 'helpcommand':
			return sendComponentWithProps(HelpCommand);
		case 'colorblock':
			return sendComponentWithProps(Colorblock);
		case 'text':
			return sendComponentWithProps(Text);
		default:
			alert('Invalid Type: ' + logItem.type);
	}
};

export default getLogItem;
