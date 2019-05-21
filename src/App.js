import React from "react";


// components
import { ConsoleOutput } from "./components/ConsoleOutput";
import { ConsoleInput } from "./components/ConsoleInput";

import "./App.scss";

function App() {

	return (
		<div className="App">
			<div className="corner-ribbon">Built w/ Hooks</div>
			<ConsoleOutput/>
			<ConsoleInput/>
		</div>
	);
}

export default App;
