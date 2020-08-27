import React from 'react';
import './App.css';
import NewComponent from './NewComponent';
import SecondComponent from './SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my first React test. It's super boring. It will get better in the future. Pinky promise.</p>
        <NewComponent />
        <SecondComponent />
        <NewComponent />
        <SecondComponent />
        <p>I totally duplicated those components. Totally.</p> 
      </header>
    </div>
  );
}

export default App;
