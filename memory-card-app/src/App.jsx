import { useState } from 'react';
import CardComponent from './grid.jsx';
import HeaderComponent from './header.jsx';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Outer div</h1>
      <HeaderComponent score={score} setScore={setScore}/>
      <CardComponent score={score} setScore={setScore} />
    </div>
  );
}

export default App;
