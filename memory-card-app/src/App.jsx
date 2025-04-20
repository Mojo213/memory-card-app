import { useState } from 'react';
import CardComponent from './grid.jsx';
import HeaderComponent from './header.jsx';

function App() {
  return (
    <div className="App">
      <h1>Outer div</h1>
      <HeaderComponent />
      <CardComponent />
    </div>
  );
}

export default App;
