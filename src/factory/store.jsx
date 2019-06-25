import React from 'react';
import useGlobalHook from 'use-global-hook';
import { determineResponse } from './responseCreator';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// initial log state
export const initialLog = [
	// {
	// 	type: 'colorblock',
	// 	text:
	// 		'Please note: this site is being built. Not complete. ETA for completion is June 15, 2019.',
	// 	color: '#00ffec',
	// },
	{
		type: 'colorblock',
		text: "Nikush Dalia's Portfolio",
		color: 'rgb(144, 238, 2)',
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
		type: 'icontext',
		icon: faPlay,
		text: `Confused? Type 'help' below or click here.`,
		mobileText: 'Start here.',
		command: 'help',
		alternateColor: true,
		small: false
	}
];

// global state
const globalState = {
	testCounter: 0,
	log: [...initialLog],
};

// global actions
const globalActions = {
	addToTestCounter: (store, testParam) => {
		store.setState({
			testCounter: store.state.testCounter + testParam,
		});
	},
	submitCommand: (store, command) =>
		store.setState({
			log: determineResponse(store.state.log, command),
		}),
};

// set up hook for global state management
const useGlobal = useGlobalHook(React, globalState, globalActions);

export default useGlobal;
