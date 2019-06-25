import React, { useRef, useEffect, useState } from 'react';

import './ConsoleInput.scss';
import useGlobal from '../factory/store';
import IconText from './responseComponents/IconText';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

export const ConsoleInput = () => {
	const [, globalActions] = useGlobal();

	const inputRef = useRef(null);
	const [currentInput, setCurrentInput] = useState('');

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const submitCommand = e => {
		if (e.key === 'Enter') {
			if (currentInput) {
				setCurrentInput('');
				globalActions.submitCommand(currentInput);
			}
		}
	};

	return (
		<div className="ConsoleInput">
			<div className="mobile-button">
				<IconText
					logItem={{
						type: 'icontext',
						icon: faGripHorizontal,
						mobileText: 'Open Menu',
						command: 'help',
						alternateColor: false,
						fullWidth: true,
						small: false,
					}}
				/>
			</div>

			<input
				ref={inputRef}
				className="console-input"
				placeholder="$ type commands here"
				autoFocus={true}
				onKeyPress={submitCommand}
				onChange={e => setCurrentInput(e.target.value)}
				value={currentInput}
			/>
		</div>
	);
};
