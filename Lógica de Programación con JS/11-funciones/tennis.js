let p1;
let p2;

let arrayGames = [];

game();

function game(){
    let numAleat = getRandomInt(2);
    arrayGames.push(numAleat);
    numAleat = getRandomInt(2);
    arrayGames.push(numAleat);
    numAleat = getRandomInt(2);
    arrayGames.push(numAleat);
    console.log(arrayGames);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}