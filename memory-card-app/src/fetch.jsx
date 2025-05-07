export default async function grabCardData () {
    const data = await fetch("https://dragonball-api.com/api/characters?limit=12");
    const jsonData = await data.json();
    return jsonData;
}

export function extractCardArr (characters){
const arrObj = characters.map(character =>
({id: character.id, 
  name : character.name, 
  image : character.image
}
));
return arrObj;
}

export function shuffleCardData (dataArr) {
const shuffled = dataArr.sort(() => Math.random() - 0.5);

return shuffled
}