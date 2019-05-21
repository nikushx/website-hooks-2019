const getHelpScreenResponse = () => [
	{
		type: 'text',
		text: 'Available Commands:',
		color: '#FFDE03'
	},
	{
		type: 'helpcommand',
		command: 'employment',
		text: 'companies I\'ve worked for' 
	},
	{
		type: 'helpcommand',
		command: 'projects',
		text: 'projects I have developed on'
	},
	{
		type: 'helpcommand',
		command: 'about me',
		text: 'who exactly is Nikush Dalia?'
	},
	{
		type: 'helpcommand',
		command: 'blog',
		text: 'CodeSalad - my personal/coding blog'
	},
	{
		type: 'helpcommand',
		command: 'youtube',
		text: 'CodeSalad YT - my coding channel'
	},
	{
		type: 'helpcommand',
		command: 'contact',
		text: 'twitter, github, linkedin, etc.'
	},
	{
		type: 'helpcommand',
		command: 'clear',
		text: 'reset and start fresh'
	}
];

export default getHelpScreenResponse;