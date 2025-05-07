import { useState } from 'react';
import React from 'react';

export default function HeaderComponent({ score, bestScore }) {
  return (
    <div id="header">
      <div className="header-right-section">
        <div className="score">Score: {score}</div>
        <div className="best-score">Best score: {bestScore}</div>
      </div>
    </div>
  );
}

