import React from 'react';
import useGlobalHook from "use-global-hook";

// initial state for global state
const initialGlobalState = {
	testCounter: 0,
	log: [
		{
			type: 'biggertext',
			text: 'Nikush Dalia',
			color: '#00b5da'
		},
		{
			type: 'link',
			href: 'mailto:nikushdalia@gmail.com',
			text: 'nikushdalia@gmail.com',
			color: '#29bcda',
		},
		{
			type: 'text',
			text: 'Web Developer, Entrepreneur, Creative',
			color: '#52c6de'
		},
		{
			type: 'text',
			text: 'Welcome to my Portfolio Website',
			color: '#88d4e4'
		},
		{
			type: 'text',
			text: 'Built with React Hooks, and useGlobalHook for state management',
			color: '#afdde7'
		},
		{
			type: 'biggertext',
			text: `Please type 'help' for list of commands`
		}
	]
};

// global actions
const globalActions = {
	addToTestCounter: (store, testParam) => {
		store.setState({
			testCounter: store.state.testCounter + testParam
		});
	}
};

// set up hook for global state management
const useGlobal = useGlobalHook(
	React,
	initialGlobalState,
	globalActions
);

export default useGlobal;
