import getHelpScreenResponse from "./helpScreenResponse";

import CodeSaladYTImg from '../images/codesalad-yt.png';
import CodeSaladRotateImg from '../images/codesalad-rotate.png';

export const determineResponse = (log, command) => {
	const modifiedLog = log;

	modifiedLog.push({
		type: 'text',
		text: `nikushx$ ${command}`,
		color: '#828282'
	});
	
	switch(command) {
		case 'video':
		case 'videos':
		case 'codesalad yt':
		case 'codesalad youtube':
		case 'youtube':
			modifiedLog.push({
				type: 'imagetext',
				title: 'Opening YouTube (CodeSalad)...',
				imageSrc: CodeSaladYTImg,
				text: 'Coding YouTube Channel',
				redirect: 'https://www.youtube.com/user/NIKUSHx'
			})
			break;
		case 'codesalad':
		case 'blog':
			modifiedLog.push({
				type: 'imagetext',
				title: 'Opening CodeSalad...',
				imageSrc: CodeSaladRotateImg,
				text: 'Personal Blog by Nikush Dalia',
				rotate: true,
				redirect: 'http://www.nikushx.com/blog'
			})
			break;
		case 'help':
			modifiedLog.push(...getHelpScreenResponse());
			break;
		default:
			console.log(`Invalid command entered: ${command}`);
	}

	return modifiedLog;
}