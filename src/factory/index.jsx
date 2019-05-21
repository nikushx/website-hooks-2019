import React from 'react';
import useGlobalHook from "use-global-hook";
import { determineResponse } from './responseCreator';

// initial state for global state
const initialGlobalState = {
	testCounter: 0,
	log: [
		{
			type: 'colorblock',
			text: 'Nikush Dalia\'s Portfolio',
			color: 'rgb(144, 238, 2)'
		},
		// {
		// 	type: 'link',
		// 	href: 'mailto:nikushdalia@gmail.com',
		// 	text: 'nikushdalia@gmail.com',
		// },
		// {
		// 	type: 'text',
		// 	text: 'Web Developer, Entrepreneur, Creative',
		// },
		// {
		// 	type: 'text',
		// 	text: 'Welcome to my Portfolio Website',
		// },
		// {
		// 	type: 'text',
		// 	text: 'Built with React Hooks, and useGlobalHook for state management',
		// },
		{
			type: 'text',
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
	},
	submitCommand: (store, command) => store.setState({
		log: determineResponse(store.state.log, command)
	})
};

// set up hook for global state management
const useGlobal = useGlobalHook(
	React,
	initialGlobalState,
	globalActions
);

export default useGlobal;
