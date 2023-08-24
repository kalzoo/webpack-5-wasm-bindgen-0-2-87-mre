import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => import("rust-crate").then(wasm => {
          console.log(wasm, typeof wasm);

          debugger

          wasm.greet();
        })}>Greeting from WASM</button>
      </header>
    </div>
  );
}

export default App;
