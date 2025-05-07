async function grabCardData () {
    const data = await fetch("https://dragonball-api.com/api/characters?limit=12");
    return data.json();
}

function extractCardArr (characters){
const arrObj = characters.map(character =>
({name : character.name, image : character.image}
));
return arrObj;
}

export default function shuffleCardData (dataArr) {
const shuffled = dataArr.sort(() => Math.random() - 0.5);

return shuffled
}