import React from 'react';
import './App.css';

const items = [
  "Sakura Sensational",
  "Winter Sky Discovery",
  "statemachine",
  "fluctuation",
  "atrium",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Hello, World! */}
      </header>
      <ul className="App-list">
        {items.map((item) => {
          return (<li className="App-list-item">{item}</li>);
        })}
      </ul>
    </div>
  );
}

export default App;
