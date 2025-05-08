import React from 'react';
import { useEffect, useState } from 'react';
import grabCardData, { extractCardArr, shuffleCardData } from './fetch';



export default function GridComponent({ score, setScore }) {
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

 function reshuffled(card, data) {
  const clonedCards = [...data];
  const clickedId = card;
  const shuffle = shuffleCardData(clonedCards);
  trackScore(clickedId, clonedCards);
  return setCard(shuffle);
 }

 function trackScore (card, cards) {
 const currentScore = [...score];
 const clicked = card.id;
 if(!currentScore.includes(clicked)){
  let updated = [...currentScore, clicked];
 setScore(updated)
 }else{
  setScore([]);
 }
 }

  return (
    <div id="grid">
      {cards.map(character=> (
          <div key={character.id} className='card' onClick={(e)=>{let clickedCard = e.target.id; return reshuffled(clickedCard, cards)}}>
           <h1>{character.name}</h1>
           <img src={character.image} alt={character.name} style={{ width: '150px', height: '260px' }} />
          </div> 
      ))}
    </div>
  );
}

