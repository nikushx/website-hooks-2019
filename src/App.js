import React from 'react';
import logo from './logo.svg';
import useGlobalHookCreator from 'use-global-hook';
import './App.css';

const initialGlobalState = {
  testCounter: 0
}

const globalActions = {
  addToTestCounter: (store, testParam) => {
    store.setState({
      testCounter: store.state.testCounter + 1
    })
  }
}

const useGlobal = useGlobalHookCreator(React, initialGlobalState, globalActions);

function App() {

  const [globalStore, globalActions] = useGlobal();

  const addToCounter = () => globalActions.addToTestCounter();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter: {globalStore.testCounter}
        </p>
        <button onClick={addToCounter}>Add to Counter</button>
      </header>
    </div>
  );
}

export default App;
