import React from 'react';
import { useEffect, useState } from 'react';
import grabCardData, { extractCardArr, shuffleCardData } from './fetch';



export default function GridComponent({ score, setScore, bestScore, setBestScore, setIsWon}) {
  const [cards, setCard] = useState([]);

  useEffect (()=> {
    async function loadData() {
      const rawData = await grabCardData();
      if (rawData && rawData.items){
      const cardArr = extractCardArr(rawData.items);
      const shuffled = shuffleCardData(cardArr);
      setCard(shuffled);
      } else {
        console.error('No items found in the response');
      }
    }
    loadData();
  }, []);

  function reshuffled(clickedId, cards) {
    trackScore(clickedId);
    const shuffled = shuffleCardData([...cards]); 
    setCard(shuffled);
  }

 function trackScore (clickedId) {
  const alreadyClicked = score.includes(clickedId);

 if(!alreadyClicked){
  setScore(prevScore => {
 let newScore = [...prevScore, clickedId];
   
 if (newScore.length === 12) {
  setIsWon(true);
 }
 return newScore;
  });
 
 }else{
  if(score.length > bestScore){
    setBestScore(score.length)
  }
  setScore([]);
 }
 }

  return (
    <div id="grid">
      {cards.map(character=> (
          <div key={character.id} className='card' onClick={() => reshuffled(character.id, cards)}>
           <h1>{character.name}</h1>
           <img src={character.image} alt={character.name} style={{ width: '150px', height: '260px' }} />
          </div> 
      ))}
    </div>
  );
}

