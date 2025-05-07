import React from 'react';
import { useEffect, useState } from 'react';
import grabCardData, { extractCardArr, shuffleCardData } from './fetch';



export default function GridComponent() {
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

  return (
    <div id="grid">
      {cards.map(character=> (
          <div key={character.id}>
           <h1>{character.name}</h1>
           <img src={character.image} alt={character.name} style={{ width: '150px', height: '250px' }} />
          </div> 
      ))}
    </div>
  );
}

