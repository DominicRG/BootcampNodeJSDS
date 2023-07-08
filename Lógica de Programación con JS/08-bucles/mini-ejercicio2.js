const { resolve } = require('path');

let numAleat = Math.trunc(Math.random()*100);
console.clear();

function mostrarPregunta(){

    return new Promise( resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Adivina el numero que eh pensado: `, (answer) => {
            readline.close();
            resolve(answer);
        })
    });

}

function pausa(){
    return new Promise( resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Presione ENTER para continuar:\n `, (answer) => {
            readline.close();
            resolve();
        })
    });
}

const main = async() => {

    let answer = '0';
    let acerto = false;
    let intentos = 0;

    do{
        answer = await mostrarPregunta();
        //console.log({answer});
        
        if(answer > numAleat){
            console.log(`El número ${answer} es mayor al que debes adivinar`);
            intentos++;
            //console.log({intentos});
            await pausa();
        }
        if(answer < numAleat){
            console.log(`El número ${answer} es menor al que debes adivinar`);
            intentos++;
            //console.log({intentos});
            await pausa();
        }
        if(answer == numAleat){
            console.log(`Ganaste: El número era ${answer} y lo hiciste en ${intentos} intentos`);
            acerto = true;
        }
    }while(acerto !== true);

}

main();
