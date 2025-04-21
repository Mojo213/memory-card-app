import { useState } from 'react';

export default function HeaderComponent({ score, bestScore }) {
  return (
    <div id="header">
      <div className="header-left-section">
        <h1>Memory Card Game</h1>
      </div>
      <div className="header-right-section">
        <div className="score">Score: {score}</div>
        <div className="best-score">Best score: {bestScore}</div>
      </div>
    </div>
  );
}

