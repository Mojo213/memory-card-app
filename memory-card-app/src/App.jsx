import { useState } from 'react';
import GridComponent from './grid.jsx';
import HeaderComponent from './header.jsx';
import React from 'react';

function App() {
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <h1> DBZ Memory Card Game</h1>
      <HeaderComponent score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      <GridComponent score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
    </div>
  );
}

export default App;
