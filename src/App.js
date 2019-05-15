import React from "react";


// components
import { ConsoleOutput } from "./components/ConsoleOutput";
import { ConsoleInput } from "./components/ConsoleInput";

import "./App.scss";
import useGlobal from "./store";

function App() {
	const [globalStore, globalActions] = useGlobal();
	// const addToCounter = () => globalActions.addToTestCounter(2);

	return (
		<div className="App">
			<div className="corner-ribbon">Built w/ Hooks</div>
			<ConsoleOutput/>
			<ConsoleInput/>
			{/* <header className="App-header">
				<span>Counter: {globalStore.testCounter}</span>
				<button onClick={addToCounter}>Add to Counter +2</button>
			</header> */}
		</div>
	);
}

export default App;
