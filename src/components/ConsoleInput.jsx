import React, { useRef, useEffect, useState } from 'react';

import './ConsoleInput.scss';
import useGlobal from '../factory';

export const ConsoleInput = () => {
	const [, globalActions] = useGlobal();

	const inputRef = useRef(null);
	const [currentInput, setCurrentInput] = useState('');

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const submitCommand = (e) => {
		if (e.key === 'Enter') {
			setCurrentInput('');
			globalActions.submitCommand(currentInput);
		}
	}

	return (
		<div className="ConsoleInput">
			<input
				ref={inputRef}
				className="console-input"
				placeholder="$ type commands here"
				autoFocus={true}
				onKeyPress={submitCommand}
				onChange={(e) => setCurrentInput(e.target.value)}
				value={currentInput}
			/>
		</div>
	);
};
