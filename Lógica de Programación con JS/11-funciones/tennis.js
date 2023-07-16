let p1;
let p2;


let games = [];
let points = [0, 0];
let setsPoints = [0, 0];
let sets = [0, 0];

tennisGame();

function tennisGame(){
    let winnerTennisGame = false;

    while(!winnerTennisGame){

        let nameWinnerSet = set();
        nameWinnerSet === "P1" ? sets[0] += 1 : sets[1] += 1;

        if(sets[0] == 2){
            console.log(`El jugador ${nameWinnerSet}  gana el partido`)
            winnerTennisGame = true;
        }
        if(sets[1] == 2){
            console.log(`El jugador ${nameWinnerSet}  gana el partido`)
            winnerTennisGame = true;
        }
    }
}

function set(){
    let winnerSet = false;

    while(!winnerSet){
        let nameWinnerGame = game();
        nameWinnerGame === "P1" ? setsPoints[0] += 1 : setsPoints[1] += 1;

        if(setsPoints[0] == 5 && setsPoints[1] == 5){
            let nameWinnerGame;
            for (let i = 0; i < 2; i++) {
                nameWinnerGame = game();
                nameWinnerGame === "P1" ? setsPoints[0] += 1 : setsPoints[1] += 1;
            }
            if(setsPoints[0] == 6 && setsPoints[1] == 6){
                nameWinnerGame = game();
                nameWinnerGame === "P1" ? setsPoints[0] += 1 : setsPoints[1] += 1;

                console.log(`Resultados del set: ${setsPoints}`)

                let nameWinnerSet = (setsPoints[0] > setsPoints[1]) ? "P1" : "P2";
                console.log(`El ganador del set es ${nameWinnerSet}\n`)

                setsPoints[0] = 0;
                setsPoints[1] = 0;

                winnerSet = true;
                return nameWinnerSet;
            }else{
                console.log(`Resultados del set: ${setsPoints}`)

                let nameWinnerSet = (setsPoints[0] > setsPoints[1]) ? "P1" : "P2";
                console.log(`El ganador del set es ${nameWinnerSet}\n`)

                setsPoints[0] = 0;
                setsPoints[1] = 0;

                winnerSet = true;
                return nameWinnerSet;
            }

        }

        if((setsPoints[0] == 6 || setsPoints[1] == 6) 
        &&
        (setsPoints[0] < 5 || setsPoints[1] < 5)){
            console.log(`Resultados del set: ${setsPoints}`)

            let nameWinnerSet = (setsPoints[0] > setsPoints[1]) ? "P1" : "P2";
            console.log(`El ganador del set es ${nameWinnerSet}\n`)

            setsPoints[0] = 0;
            setsPoints[1] = 0;

            winnerSet = true;
            return nameWinnerSet;
        }
    }
}

function game(){

    let winnerGame = false;

    while(!winnerGame){
        let numAleat = getRandomInt(2);
        games.push(numAleat);

        games.forEach((element) => {
            if(element === 0){
                points[0] += 1;
            }else{
                points[1] += 1;
            }
        });

        if(
        (points[0] >= 4 && points[0] - points[1] >= 2) ||
        (points[1] >= 4 && points[1] - points[0] >= 2)
        ){
            games = []
            
            let nameWinnerGame = (points[0] > points[1]) ? "P1" : "P2";
            console.log(`El ganador del game es ${nameWinnerGame}`)
    
            points[0] = 0;
            points[1] = 0;

            winnerGame = true;
            return nameWinnerGame;
        }
    
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}