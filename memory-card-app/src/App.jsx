import { useState } from 'react';
import GridComponent from './grid.jsx';
import HeaderComponent from './header.jsx';
import React from 'react';

function App() {
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [isWon, setIsWon] = useState(false);

  function resetGame() {
    setScore([]);
    setIsWon(false);  
   }

  return (
    <div className="App">
      <h1> DBZ Memory Card Game</h1>
      <HeaderComponent score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      {isWon ? <div className='backdrop'>
      <div className='winModal'> 
        <p>You Have Won!</p>
      <button className='resetGame' onClick={() => resetGame()}>New Game</button>
      </div> </div>:<GridComponent score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} setIsWon={setIsWon} />}
    </div>
    
  );
}

export default App;
