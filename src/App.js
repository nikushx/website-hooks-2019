import React, {useRef} from "react";

// components
import { ConsoleOutput } from "./components/ConsoleOutput";
import { ConsoleInput } from "./components/ConsoleInput";

// images
import HookImg from './images/hook.png';

import "./App.scss";

function App() {
	const appRef = useRef(null);

	return (
		<div className="App" ref={appRef}>
			<div className="hook-img"><img alt="hook" src={HookImg} /></div>
			<div className="corner-ribbon">Rebuilt w/ Hooks</div>
			<ConsoleOutput appRef={appRef}/>
			<ConsoleInput/>
		</div>
	);
}

export default App;
