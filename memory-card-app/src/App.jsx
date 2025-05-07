import { useState } from 'react';
import GridComponent from './grid.jsx';
import HeaderComponent from './header.jsx';
import React from 'react';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1> DBZ Memory Card Game</h1>
      <HeaderComponent score={score} setScore={setScore}/>
      <GridComponent score={score} setScore={setScore} />
    </div>
  );
}

export default App;
